import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer
} from "recharts"

const data = [
  { skill: "DSA", score: 75 },
  { skill: "System Design", score: 60 },
  { skill: "Communication", score: 80 },
  { skill: "Resume", score: 85 },
  { skill: "Aptitude", score: 70 }
]

export default function SkillRadar() {

  return (

    <div className="w-full h-[300px] max-w-full">

      <ResponsiveContainer>

        <RadarChart data={data}>

          <PolarGrid />

          <PolarAngleAxis dataKey="skill" />

          <Radar
            dataKey="score"
            stroke="hsl(245, 58%, 51%)"
            fill="hsl(245, 58%, 51%)"
            fillOpacity={0.6}
          />

        </RadarChart>

      </ResponsiveContainer>

    </div>

  )
}