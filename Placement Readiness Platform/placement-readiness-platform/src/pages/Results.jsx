import { useLocation } from "react-router-dom"

export default function Results() {

  const {state} = useLocation()

  const entry = state?.entry

  if (!entry) return <p>No analysis available</p>

  return (
    <div className="p-6 space-y-6">

      <h2 className="text-xl font-semibold">
        Readiness Score: {entry.readinessScore}
      </h2>

      <div>
        <h3 className="font-semibold">Skills</h3>

        {Object.entries(entry.extractedSkills).map(([cat,skills])=>(
          <div key={cat}>
            <strong>{cat}</strong>: {skills.join(", ")}
          </div>
        ))}
      </div>

    </div>
  )
}