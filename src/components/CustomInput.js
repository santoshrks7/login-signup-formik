import React from "react";
import { useField } from "formik";
import { Box, TextField } from "@mui/material/";

const CustomInput = ({ label, ...props }) => {
  //   console.log({ label, ...props });
  const [field, meta] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <Box>
        <TextField label={label} {...field} fullWidth />
        {meta.touched && meta.error ? (
          <div class="errortext1">{meta.error}</div>
        ) : null}
      </Box>
      {/* <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
    </>
  );
};

export default CustomInput;
