import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    console.log("About Us Page mounted");
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // This ensures the div takes up the full viewport height
        backgroundColor: "#36454F", // Charcoal background color
        display: "flex",
        flexDirection: "column",
        color: "#ffffff",
        justifyContent: "center", // This centers the content vertically
        alignItems: "center", // This centers the content horizontally
      }}
    >
      Dashboard Page
    </div>
  );
};

export default Dashboard;
