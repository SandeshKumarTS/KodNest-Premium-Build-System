import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { extractSkills } from "../analysis/skillExtractor"
import { generatePlan } from "../analysis/planGenerator"
import { generateQuestions } from "../analysis/questionGenerator"
import { calculateScore } from "../analysis/readinessScore"
import { saveAnalysis } from "../utils/storage"
import { useNavigate } from "react-router-dom"

export default function Analyze() {

  const [jdText,setJdText] = useState("")
  const [company,setCompany] = useState("")
  const [role,setRole] = useState("")

  const navigate = useNavigate()

  function analyzeJD() {

  if (!jdText.trim()) {
    alert("Please paste a job description to analyze.")
    return
  }

  const skills = extractSkills(jdText)

  const plan = generatePlan(skills)

  const questions = generateQuestions(skills)

  const score = calculateScore({
    skills,
    company,
    role,
    jdText
  })

  const entry = {
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    company: company || "Unknown Company",
    role: role || "Unknown Role",
    jdText,
    extractedSkills: skills,
    plan,
    questions,
    readinessScore: score
  }

  saveAnalysis(entry)

  navigate("/results",{state:{entry}})
}

  return (
    <div className="p-6 space-y-4">

      <input
        placeholder="Company"
        className="border p-2 w-full"
        onChange={e=>setCompany(e.target.value)}
      />

      <input
        placeholder="Role"
        className="border p-2 w-full"
        onChange={e=>setRole(e.target.value)}
      />

      <textarea
        placeholder="Paste Job Description"
        className="border p-3 w-full h-40 overflow-y-auto resize-y"
        onChange={e=>setJdText(e.target.value)}
      />

      <button
        onClick={analyzeJD}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Analyze JD
      </button>

    </div>
  )
}