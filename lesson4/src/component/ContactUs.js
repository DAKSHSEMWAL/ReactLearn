import React, { useEffect } from "react";
// ContactUs
const ContactUs = () => {
  useEffect(() => {
    console.log("ContactUs Page mounted");
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // This ensures the div takes up the full viewport height
        backgroundColor: "#36454F", // Charcoal background color
        display: "flex",
        color: "#ffffff",
        flexDirection: "column",
        justifyContent: "center", // This centers the content vertically
        alignItems: "center", // This centers the content horizontally
      }}
    >
      Contact Us Page
    </div>
  );
};
export default ContactUs;
