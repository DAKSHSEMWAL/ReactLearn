import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  @apply bg-blue-500 text-white px-4 py-2 rounded;
`;
const Dashboard = () => {
  return (
    <div className="App">
      <StyledButton>Click me</StyledButton>
    </div>
  );
};

export default Dashboard;
