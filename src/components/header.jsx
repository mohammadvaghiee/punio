import { Link } from "react-router-dom";
import '../style/header.css'
function Header() {
    return ( 
        <>
            <Link to={`http://localhost:3000`}>
                <h1>punio</h1>
            </Link>
            <hr />
        </>
     );
}

export default Header;