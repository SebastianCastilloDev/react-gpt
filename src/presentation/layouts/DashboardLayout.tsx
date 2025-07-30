import { NavLink, Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";

export const DashboardLayout = () => {
  return (
    <main className="flex flex-row mt-8 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 min-h-screen">
      <nav className="hidden sm:flex flex-col ml-8 w-[340px] min-h-[calc(100vh-3.5rem)] bg-white/80 shadow-xl p-7 rounded-2xl border border-indigo-100 backdrop-blur-md">
        <h1 className="font-extrabold text-2xl lg:text-4xl bg-gradient-to-br from-indigo-700 via-indigo-400 to-indigo-700 bg-clip-text text-transparent drop-shadow-md">
          ReactGPT<span className="text-indigo-500">.</span>
        </h1>
        <span className="text-lg mt-2 text-indigo-700 font-medium">Bienvenido</span>

        <div className="border-b border-indigo-200 my-5" />

        {/* Opciones del menú */}
        <div className="flex flex-col gap-2 mt-2 bg-indigo-50/60 p-3 rounded-xl shadow-inner border border-indigo-100">
          {menuRoutes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 text-base font-medium
                ${isActive ? "bg-indigo-200 text-indigo-800 shadow font-bold" : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900"}`
              }
              style={{ minHeight: 44 }}
            >
              <i className={`${route.icon} text-xl`} />
              <span className="text-base">{route.title}</span>
            </NavLink>
          ))}
        </div>

      </nav>

      <section className="mx-2 sm:mx-12 flex flex-col w-full h-[calc(100vh-60px)] bg-white/90 shadow-lg p-8 rounded-2xl border border-indigo-100">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-2">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};