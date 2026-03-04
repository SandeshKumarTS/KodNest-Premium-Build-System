import { getHistory } from "../utils/storage"
import { useNavigate } from "react-router-dom"

export default function History() {

  const history = getHistory()
  const navigate = useNavigate()

  return (

    <div className="p-6">

      {history.map(entry => (

        <div
          key={entry.id}
          className="border p-4 mb-3 cursor-pointer"
          onClick={()=>navigate("/results",{state:{entry}})}
        >

          <p>{entry.company} — {entry.role}</p>
          <p>Score: {entry.readinessScore}</p>
          <p>{new Date(entry.createdAt).toLocaleDateString()}</p>

        </div>

      ))}

    </div>

  )
}