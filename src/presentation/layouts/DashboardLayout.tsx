import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
  return (
    <>
      <h1 className="fade-in text-3xl font-bold underline">Dashboard</h1>
      <Outlet />
    </>
  )
}
