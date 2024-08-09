import { NavLink } from "react-router-dom"

// define the css class string 
const ContainerClass = "flex flex-col w-[13rem]"
const NavLinkClass= "p-2 hover:bg-black hover:text-white transition-all hover:opacity-80"
// end of class string

function SideMenu() {
  return (
    <div className={ContainerClass}>
        <NavLink className={NavLinkClass} to="/">Home</NavLink>
        <NavLink className={NavLinkClass} to="/about">About</NavLink>
        <NavLink className={NavLinkClass} to="/contact">Contact</NavLink>
    </div>
  )
}

export default SideMenu
