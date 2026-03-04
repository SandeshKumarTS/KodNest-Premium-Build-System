import { Card } from "../components/ui/Card"
import ReadinessScore from "../components/ReadinessScore"
import SkillRadar from "../components/SkillRadar"

export default function Dashboard() {

  const completed = 3
  const total = 10
  const progress = (completed / total) * 100

  return (

    <div className="grid md:grid-cols-2 gap-6">

      <Card>
        <h2 className="font-semibold mb-4">
          Overall Readiness
        </h2>

        <ReadinessScore />
      </Card>


      <Card>
        <h2 className="font-semibold mb-4">
          Skill Breakdown
        </h2>

        <SkillRadar />
      </Card>


      <Card>
        <h2 className="font-semibold mb-4">
          Continue Practice
        </h2>

        {completed < total ? (
          <>
            <p className="mb-3">Dynamic Programming</p>

            <div className="w-full bg-gray-200 h-2 rounded mb-3">
              <div
                className="bg-primary h-2 rounded"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded">
              Continue
            </button>
          </>
        ) : (
          <p className="text-sm text-gray-500">
            All topics complete! Review previous problems to stay sharp.
          </p>
        )}

      </Card>


      <Card>
        <h2 className="font-semibold mb-4">
          Weekly Goals
        </h2>

        <p className="mb-3">
          Problems Solved: 12/20 this week
        </p>

        <div className="w-full bg-gray-200 h-2 rounded mb-4">
          <div className="bg-primary h-2 rounded w-[60%]"></div>
        </div>

        <div className="flex gap-2">
          <div className="w-6 h-6 bg-primary rounded-full"></div>
          <div className="w-6 h-6 bg-primary rounded-full"></div>
          <div className="w-6 h-6 bg-primary rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </Card>


      <Card>
        <h2 className="font-semibold mb-4">
          Upcoming Assessments
        </h2>

        <ul className="space-y-3">

          <li>
            <p className="font-medium">DSA Mock Test</p>
            <p className="text-sm text-gray-500">
              Tomorrow, 10:00 AM
            </p>
          </li>

          <li>
            <p className="font-medium">System Design Review</p>
            <p className="text-sm text-gray-500">
              Wed, 2:00 PM
            </p>
          </li>

          <li>
            <p className="font-medium">HR Interview Prep</p>
            <p className="text-sm text-gray-500">
              Friday, 11:00 AM
            </p>
          </li>

        </ul>

      </Card>

    </div>

  )
}