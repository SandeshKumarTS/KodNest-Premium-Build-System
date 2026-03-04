export const SKILL_MAP = {

  "Core CS": [
    "DSA",
    "OOP",
    "DBMS",
    "OS",
    "Networks"
  ],

  "Languages": [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "C#",
    "Go"
  ],

  "Web": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "REST",
    "GraphQL"
  ],

  "Data": [
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis"
  ],

  "Cloud/DevOps": [
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Linux"
  ],

  "Testing": [
    "Selenium",
    "Cypress",
    "Playwright",
    "JUnit",
    "PyTest"
  ]

}


export function extractSkills(jdText) {

  const text = jdText.toLowerCase()

  const result = {}

  Object.entries(SKILL_MAP).forEach(([category, skills]) => {

    const detected = skills.filter(skill =>
      text.includes(skill.toLowerCase())
    )

    if (detected.length > 0) {
      result[category] = detected
    }

  })

  if (Object.keys(result).length === 0) {

    result["General"] = [
      "DSA",
      "OOP",
      "DBMS",
      "OS",
      "Basic problem solving"
    ]

  }

  return result

}