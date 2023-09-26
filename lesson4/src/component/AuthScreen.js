import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";

const AuthScreen = (props) => {
  function responseGoogle(response) {
    var user = jwt_decode(response.credential);
    console.log("Decoded user data:", user);
    props.onLoginSuccess(user); // Pass user data to the callback
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "331602027852-o1c4qldeu7qql2pqf1r9md9qtnkr9rog.apps.googleusercontent.com",
      callback: responseGoogle,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "xxlarge",
    });

    google.accounts.id.prompt();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // This ensures the div takes up the full viewport height
        backgroundColor: "#36454F", // Charcoal background color
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // This centers the content vertically
        alignItems: "center", // This centers the content horizontally
      }}
    >
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to Our App</h1>
        <p style={styles.heroSubtitle}>Sign in to continue</p>
      </div>
      <div id="signInDiv"></div>
    </div>
  );
};
const styles = {
  hero: {
    marginBottom: "20px",
    textAlign: "center",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "2.5em",
  },
  heroSubtitle: {
    color: "#ddd",
    fontSize: "1.2em",
  },
};
export default AuthScreen;
