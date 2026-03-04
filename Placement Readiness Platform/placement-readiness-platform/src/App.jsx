import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import AppLayout from "./layout/AppLayout"
import Dashboard from "./pages/Dashboard"
import Practice from "./pages/Practice"
import Assessments from "./pages/Assessments"
import Resources from "./pages/Resources"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route element={<AppLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />

      </Route>

    </Routes>
  )
}