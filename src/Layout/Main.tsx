import Navbar from "../Components/Navbar"
import SideMenu from "../Components/SideMenu"
import View from "./Routes/View"

function Main() {
  return (
    <div>
        <Navbar />
        <MenuContainer>
            <SideMenu />
            <View />
        </MenuContainer>
    </div>
  )
}

export default Main


// pre styled components for the purposes of the component clean up
function MenuContainer({children}:any) {
    return(
        <div className="flex gap-3">
            {children}
        </div>
    )
}