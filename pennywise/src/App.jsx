import SideBar from "./components/SideBar";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import userDefault from './images/user-default.png'
export default function App() {
    let username = "Logan";
    return (
    <div className="min-h-screen flex " >
        <SideBar/>
        <main className="flex-1" >
            <header className="flex items-center justify-between px-5 pt-2 bg-stone-50 mr-4 rounded-tr-2xl rounded-br-2xl" >
                <h1 className="font-bold text-xl" >Hello, {username}</h1>
                <div className="flex items-center" >
                    <NotificationsOutlinedIcon  style={{fontSize:38}}/>
                    <Avatar src= {userDefault} sx={{ width: 56, height: 56 }}/>
                </div>
            </header>
        </main>
    </div>
  );
}
