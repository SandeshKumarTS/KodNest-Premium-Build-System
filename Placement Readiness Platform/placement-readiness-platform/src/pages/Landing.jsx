import { useNavigate } from "react-router-dom"
import { Code, Video, BarChart3 } from "lucide-react"
import { useState } from "react"

export default function Landing() {

  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false)

  const handleStart = () => {
    if (clicked) return
    setClicked(true)
    navigate("/dashboard")
  }

  return (

    <div className="min-h-screen flex flex-col">

      <section className="text-center py-24 bg-gray-50">

        <h1 className="text-5xl font-bold mb-6">
          Ace Your Placement
        </h1>

        <p className="text-lg mb-10">
          Practice, assess, and prepare for your dream job
        </p>

        <button
          onClick={handleStart}
          className="bg-primary text-white px-8 py-3 rounded-md"
        >
          Get Started
        </button>

      </section>


      <section className="grid md:grid-cols-3 gap-8 px-16 py-16">

        <div className="border p-6 rounded-lg text-center">
          <Code className="mx-auto mb-4"/>

          <h3 className="font-semibold text-lg">
            Practice Problems
          </h3>

          <p className="text-sm">
            Sharpen coding skills with curated problems
          </p>
        </div>


        <div className="border p-6 rounded-lg text-center">
          <Video className="mx-auto mb-4"/>

          <h3 className="font-semibold text-lg">
            Mock Interviews
          </h3>

          <p className="text-sm">
            Simulate real interview environments
          </p>
        </div>


        <div className="border p-6 rounded-lg text-center">
          <BarChart3 className="mx-auto mb-4"/>

          <h3 className="font-semibold text-lg">
            Track Progress
          </h3>

          <p className="text-sm">
            Monitor improvement and readiness
          </p>
        </div>

      </section>


      <footer className="text-center py-6 border-t space-x-6">

        <button
          onClick={() => alert("Coming soon")}
          className="text-sm underline"
        >
          Terms
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="text-sm underline"
        >
          Privacy
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="text-sm underline"
        >
          Contact
        </button>

      </footer>

    </div>

  )
}