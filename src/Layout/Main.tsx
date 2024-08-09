import Navbar from "../Components/Navbar"
import SideMenu from "../Components/SideMenu"
import View from "./Routes/View"

// defind css string
const MenuContainerClass= "flex gap-3"
//end

function Main() {
  return (
    <div>
        <Navbar />
        <div className={MenuContainerClass}>
            <SideMenu />
            <View />
        </div>
    </div>
  )
}

export default Main
