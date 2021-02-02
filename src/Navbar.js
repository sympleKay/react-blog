import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add">Add Blogpost</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;