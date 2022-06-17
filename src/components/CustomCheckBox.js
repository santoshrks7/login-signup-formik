import React from "react";
import { useField } from "formik";
import { Box, Checkbox } from "@mui/material/";

const CustomCheckBox = ({ label, ...props }) => {
  //   console.log({ label, ...props });
  const [field, meta] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <Box sx={{ margin: 2 }}>
        <Checkbox {...field} />
        <span>I Accept the terms of services</span>
        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </Box>
      {/* <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
    </>
  );
};

export default CustomCheckBox;
