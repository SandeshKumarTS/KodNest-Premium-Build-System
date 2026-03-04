import { Link } from "react-router-dom"
import { LayoutDashboard, Code, ClipboardList, BookOpen, User } from "lucide-react"

export default function Sidebar() {

  return (
    <div className="w-64 h-screen border-r p-6">

      <nav className="space-y-6">

        <Link to="/dashboard" className="flex items-center gap-2">
          <LayoutDashboard size={18}/> Dashboard
        </Link>

        <Link to="/practice" className="flex items-center gap-2">
          <Code size={18}/> Practice
        </Link>

        <Link to="/assessments" className="flex items-center gap-2">
          <ClipboardList size={18}/> Assessments
        </Link>

        <Link to="/resources" className="flex items-center gap-2">
          <BookOpen size={18}/> Resources
        </Link>

        <Link to="/profile" className="flex items-center gap-2">
          <User size={18}/> Profile
        </Link>

      </nav>

    </div>
  )
}