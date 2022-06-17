import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormikComponent from "./components/FormikComponent";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" onClick={() => setView("basic")}>
          using useFormik
        </Button>
        <Button variant="outlined" onClick={() => setView("advanced")}>
          using Formik Component
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {view === "basic" ? <Form /> : <FormikComponent />}
      </Box>
    </div>
  );
}

export default App;
