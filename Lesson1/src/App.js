import "./App.css";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#4B34A2",
    },
    secondary: {
      main: "#EDD83D",
      contrastText: "#6AB547",
      dark: "#A5C4BD",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});

const projects = [
  {
    title: "Project 1",
    description: "This is the description for project 1.",
    imageUrl:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s",
  },
  {
    title: "Project 2",
    description: "This is the description for project 2.",
    imageUrl:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Project 3",
    description: "This is the description for project 3.",
    imageUrl:
      "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Project 4",
    description: "This is the description for project 3.",
    imageUrl:
      "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }, // Add more projects as needed
  {
    title: "Project 5",
    description: "This is the description for project 3.",
    imageUrl:
      "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Project 6",
    description: "This is the description for project 3.",
    imageUrl:
      "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const UpdateBox = () => {
  const [editorContent, setEditorContent] = React.useState("");

  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <ReactQuill
        style={{ height: "100%", width: "100%", boxSizing: "border-box" }}
        value={editorContent}
        onChange={setEditorContent}
      />
    </div>
  );
};

const HorizontalScrollList = () => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "16px",
        padding: "16px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          style={{
            width: "100%",
            maxWidth: "250px",
            height: "140px",
            flexShrink: 0,
          }}
        >
          <CardMedia
            component="img"
            height="90"
            image={project.imageUrl}
            alt={project.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{ height: "100vh", overflow: "hidden", padding: "16px" }}
      >
        <h1>My Projects</h1>
        <HorizontalScrollList />
        <UpdateBox />
      </div>
    </ThemeProvider>
  );
};
export default App;
