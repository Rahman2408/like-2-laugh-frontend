import { NavLink } from "react-router-dom";
import { connect } from  "react-redux";
import { logout } from "../redux/actionCreator"

function Nav({logout}) {
 return <nav>
    <NavLink to="/jokes"><button>All Jokes</button></NavLink>
    <NavLink to={"/myjokes"}><button> My Jokes</button></NavLink>
    <button onClick={logout}> Log Out</button>
  </nav>
}
export default connect(null, {logout})(Nav);