import { NavLink } from "react-router-dom";
import { connect } from  "react-redux";
import { logout } from "../redux/actionCreator"

function Nav({logout, username}) {

  const activeUser = () => <nav>
    <NavLink to="/jokes"><button>All Jokes</button></NavLink>
    <NavLink to={"/myjokes"}><button> My Jokes</button></NavLink>
    <button onClick={logout}> Log Out</button>
  </nav>
  
  const inactiveUser = () => <nav>Log In or Sign Up to get LOLin'</nav>

  return username ? activeUser() : inactiveUser()
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Nav);