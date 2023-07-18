import { Outlet } from "react-router-dom"

function HeaderFooter() {
  return (
    <div>
      <header className="flex flex-row gap-10 justify-between items-center w-full h-[50px]">
        <h1 className="mx-2 text-3xl drop-shadow-[0_1.2px_1.2px_rgba(219,41,121,1)]">SICout9010</h1>
        <ul className="grid grid-flow-col gap-10 mx-2 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(219,41,121,1)]">
          <li>Home</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </header>
      <Outlet />
      <footer className="font-montserrat flex flex-row gap-10 justify-center items-center w-full h-[45px] bg-[#232323]">
        <p>Made with ❤️ by SICout9010</p>
      </footer>
    </div>
  )
}

export default HeaderFooter