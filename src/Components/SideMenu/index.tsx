import { NavLink } from "react-router-dom"

function SideMenu() {
  return (
    <Container>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </Container>
  )
}

export default SideMenu


function Container ({children}: any) {
    return(
        <div className="flex flex-col">
            {children}
        </div>
    )
}