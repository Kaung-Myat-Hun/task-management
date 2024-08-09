import Navbar from "../Components/Navbar"
import SideMenu from "../Components/SideMenu"
import View from "./Routes/View"

// defind css string
const MenuContainerClass= "flex gap-2 h-[91vh]"
const ViewContainerClass = " w-[100%]"
//end

function Main() {
  return (
    <div>
        <Navbar />
        <div className={MenuContainerClass}>
            <SideMenu />
            <div className={ViewContainerClass}>
                <View />
            </div>
        </div>
    </div>
  )
}

export default Main
