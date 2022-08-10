import "./header.css";
import {Link} from "react-router-dom";
const Header =()=>{
    return(
        <div className="header">
            <Link to='' className="linkpart">Intuitive Quiz hub</Link>
            <hr></hr>
        </div>
    );
}
export default Header;