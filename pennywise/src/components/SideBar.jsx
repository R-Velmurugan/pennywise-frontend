import AppsIcon from '@mui/icons-material/Apps';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import balloon from "../images/balloon.png"

function SidebarItem({children , text}) {
    return <li className="my-3 p-4 text-stone-500 hover:text-black hover:cursor-pointer hover:bg-stone-200 rounded-md" >
        {children}
        <span className="ml-2" >{text}</span>
    </li>
}
export default function SideBar() {
    return <aside className="bg-stone-50 w-64 mb-10 py-6 pl-2 rounded-tr-2xl rounded-br-2xl" >
        <div>
            <img className="inline" src={balloon} height="50px" width="50px"  alt="Red balloon"/>
            <h1 className="inline"><b>Pennywise</b></h1>
        </div>
        <ul className="ml-3 mt-3" >
            <SidebarItem text="Overview" ><AppsIcon/></SidebarItem>
            <SidebarItem text="Transaction" ><SyncAltIcon/></SidebarItem>
            <SidebarItem text="Plan" ><AssignmentIcon/></SidebarItem>
            <SidebarItem text="Budget" ><AccountBalanceWalletIcon/></SidebarItem>
        </ul>
    </aside>
}