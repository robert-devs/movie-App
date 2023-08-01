import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
        <img src="logo.png" alt=" logo" />
       <div>
        <div className="search">
          <input type="text" placeholder="Search a movie" />
        </div>
        <div>
          {/* <Link to ="/"> Login/Sign Up</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar