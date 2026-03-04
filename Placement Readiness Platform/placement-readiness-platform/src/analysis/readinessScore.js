export function calculateScore({skills, company, role, jdText}) {

  let score = 35

  const categories = Object.keys(skills).length

  score += Math.min(categories * 5, 30)

  if (company) score += 10
  if (role) score += 10

  if (jdText.length > 800) score += 10

  return Math.min(score,100)
}