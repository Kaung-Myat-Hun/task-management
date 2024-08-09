import { NavLink } from "react-router-dom"
import Button from "../Button"

// define the css class string 
const ContainerClass = "flex flex-col w-[12rem] m-2 justify-between"
const NavLinkClass= "p-2 hover:bg-violet-900 hover:text-white transition-all hover:opacity-80 m-1 rounded-lg text-sm px-3"
const NavLinkContainerClass = 'flex flex-col'
// end of class string

function SideMenu() {
    const logoutHandler=() =>{
        console.log("logged out")
    }
  return (
    <div className={ContainerClass}>
        <div className={NavLinkContainerClass}>
            <NavLink className={NavLinkClass} to="/">Home</NavLink>
            <NavLink className={NavLinkClass} to="/about">About</NavLink>
            <NavLink className={NavLinkClass} to="/contact">Contact</NavLink>
        </div>
        <Button className={NavLinkClass} onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default SideMenu
