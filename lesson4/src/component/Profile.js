import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [user, setUser] = useState(props.userData || {});

  useEffect(() => {
    setUser(props.userData);
  }, [props.userData]);

  if (!user) return null; // or you can return a loading spinner or some placeholder

  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <img
          src={user.picture}
          alt="User Profile"
          style={styles.profileImage}
        />
        <h2 style={styles.text}>{user.name}</h2>
        <p style={styles.text}>{user.email}</p>
        {/* Add any other fields you want to display */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#36454F",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "20px auto",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  text: {
    color: "36454F",
  },
};

export default Profile;
