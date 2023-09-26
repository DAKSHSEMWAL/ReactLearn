import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import Dashboard from "./component/Dashboard.js";
import AuthScreen from "./component/AuthScreen.js";
import Profile from "./component/Profile.js";
import AboutUs from "./component/AboutUs.js";
import ContactUs from "./component/ContactUs.js";
import { useState } from "react";

function MainApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = useState();
  const history = useHistory(); // Use the useHistory hook inside MainApp

  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userData", userData);
    history.push("/dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({});
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userData");
    history.push("/");
  };
  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <div>
      {isAuthenticated && (
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/dashboard" style={styles.link}>
                Dashboard
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/profile" style={styles.link}>
                Profile
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/about-us" style={styles.link}>
                About Us
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/contact-us" style={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>
          {user && (
            <div style={styles.profile}>
              <img
                src={user.picture}
                alt="User Profile"
                style={styles.profileImage}
              />
              <button onClick={handleLogout}>LogOut</button>
            </div>
          )}
        </nav>
      )}
      <Switch key={window.location.pathname}>
        <Route
          path="/"
          exact
          render={(routeProps) => (
            <AuthScreen {...routeProps} onLoginSuccess={handleLoginSuccess} />
          )}
        />
        <PrivateRoute path="/dashboard" exact>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute
          path="/profile"
          exact
          component={Profile}
          userData={user}
        />
        <PrivateRoute path="/about-us" exact>
          <AboutUs />
        </PrivateRoute>
        <PrivateRoute path="/contact-us" exact>
          <ContactUs />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 20px",
    background: "#333",
    color: "#fff",
    position: "relative", // This is needed to position the dropdown correctly
  },
  navList: {
    // New style for the <ul> element
    display: "flex",
    listStyleType: "none", // Removes the bullet points
    padding: 0, // Removes default padding
    margin: 0, // Removes default margin
  },
  navItem: {
    // New style for the <li> elements
    margin: "0 10px", // Adds some spacing between the items
  },
  profile: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer", // Indicates the profile is clickable
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginRight: 10,
  },
  dropdown: {
    position: "absolute",
    top: "100%", // Position it right below the navbar
    right: 0, // Align it to the right
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "150px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  },
  dropdownItem: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
    color: "black",
  },
  link: {
    color: "#fff", // Set text color to white
    textDecoration: "none", // Remove underline
    transition: "color 0.3s", // Optional: Smooth transition for hover effect
    "&:hover": {
      color: "#ddd", // Optional: Slightly dim the color on hover
    },
  },
};

export default App;
