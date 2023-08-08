import "../styles/navbar.css"
import  {useState} from "react"
import { AiOutlineClose, AiOutlineMenu,} from 'react-icons/ai'


const Navbar = () => {
    const [isOPen,setIsOpen] = useState<boolean>(false)
  return (
    <header className="header">
        <div className="mobile_logo">
            <img src="/images/logo.svg" alt="mobile view logo" />
        </div>
        <div className={`header_container ${isOPen ? "show_dropdown" :"hide_dropdown"}`}>
        <nav className="nav_wrapper">
            <div className="desktop_logo"> <img src="/images/logo.svg" alt="logo" /></div>
            <ul className="feature_list">
                <li className="feature_list-item">Features</li>
                <li className="feature_list-item">Pricing</li>
                <li className="feature_list-item">Resuorces</li>
            </ul>
        </nav>
        <div className="header_btns-wrapper">
            <button className="header_btn header_btn-login">Login</button>
            <button className="header_btn header_btn-signup">SignUp</button>
        </div>
        </div>
    <div className="toggle_btn" onClick={()=>setIsOpen(!isOPen)}>
        {
            isOPen?<><AiOutlineClose className="toggle_icon"/></>:<AiOutlineMenu  className="toggle_icon"/>
        }
    </div>
    </header>
  )
}

export default Navbar