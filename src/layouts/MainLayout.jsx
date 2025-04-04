import { Outlet } from "react-router"



function MainLayout() {
  return (
    <div className="font-montserrat">
       <Outlet/>
    </div>
  )
}

export default MainLayout