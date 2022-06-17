import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  //   console.log({ label, ...props });
  const [field, meta] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default CustomInput;
