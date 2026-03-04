export default function ReadinessScore() {

  const radius = 90
  const circumference = 2 * Math.PI * radius
  const rawScore = 72
  const score = Math.max(0, Math.min(rawScore, 100))
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center">

      <svg width="220" height="220">

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="14"
          fill="none"
        />

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="hsl(245, 58%, 51%)"
          strokeWidth="14"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 110 110)"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-2xl font-bold fill-black"
        >
          72/100
        </text>

      </svg>

      <p className="mt-2 text-sm">
        Readiness Score
      </p>

    </div>
  )
}