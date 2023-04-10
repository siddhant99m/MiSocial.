import "./topbar.css"
import { Search, Person, Chat, Notifications, } from "@mui/icons-material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

// import SearchIcon from '@mui/icons-material/Search';


export default function Topbar() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">MiSocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend,post and videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconbadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconbadge">3</span>
                    </div>

                </div>
                <div>
                    <Link to={`/profile/${user.username}`} >
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbarImg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}