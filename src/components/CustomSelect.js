import React from "react";
import { useField } from "formik";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        {/* <Select label="job type 'random for spacing'" {...field} {...props}> */}
        <Select label={label} {...field} {...props}>
          <MenuItem value="developer">developer</MenuItem>
          <MenuItem value="designer">designer</MenuItem>
          <MenuItem value="manager">product manager</MenuItem>
          <MenuItem value="tester">tester</MenuItem>
          <MenuItem value="other">other</MenuItem>
        </Select>
      </FormControl>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default CustomSelect;
