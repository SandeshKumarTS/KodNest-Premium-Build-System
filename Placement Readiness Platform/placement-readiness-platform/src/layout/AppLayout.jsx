import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export default function AppLayout() {

  return (

    <div className="flex">

      <Sidebar/>

      <div className="flex-1">

        <Header/>

        <main className="p-6">
          <Outlet/>
        </main>

      </div>

    </div>

  )
}