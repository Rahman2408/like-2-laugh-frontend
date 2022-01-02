import { NavLink } from "react-router-dom";

function Nav() {
 return <nav>
    <NavLink to="/jokes">All Jokes</NavLink>
    <NavLink to={"/myjokes"}> My Jokes</NavLink>
  </nav>
}
export default Nav;