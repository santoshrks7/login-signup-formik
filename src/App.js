import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormikComponent from "./components/FormikComponent";

function App() {
  const [view, setView] = useState("advanced");
  return (
    <div className="App">
      <Box>
        <Button variant="outlined" onClick={() => setView("basic")}>
          using useFormik
        </Button>
        <Button variant="outlined" onClick={() => setView("advanced")}>
          using Formik Component
        </Button>
      </Box>
      <Box>{view === "basic" ? <Form /> : <FormikComponent />}</Box>
    </div>
  );
}

export default App;
