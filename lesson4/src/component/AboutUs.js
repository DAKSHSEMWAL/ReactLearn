import { useEffect } from "react";
// AboutUs
const AboutUs = () => {
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
        color: "#ffffff",
        flexDirection: "column",
        justifyContent: "center", // This centers the content vertically
        alignItems: "center", // This centers the content horizontally
      }}
    >
      About Us Page
    </div>
  );
};
export default AboutUs;
