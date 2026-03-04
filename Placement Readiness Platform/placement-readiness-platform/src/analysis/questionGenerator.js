export function generateQuestions(skills) {

  const questions = []

  if (skills.Web?.includes("React"))
    questions.push("Explain React state management options.")

  if (skills.Data?.includes("SQL"))
    questions.push("Explain indexing and when it helps.")

  if (skills["Core CS"]?.includes("DSA"))
    questions.push("How would you optimize search in sorted data?")

  questions.push(
    "Explain time complexity with examples.",
    "Describe a challenging bug you fixed.",
    "How do REST APIs work?",
    "Explain database normalization.",
    "How do you optimize backend performance?",
    "What testing strategies do you use?",
    "Explain your project architecture."
  )

  return questions.slice(0,10)
}