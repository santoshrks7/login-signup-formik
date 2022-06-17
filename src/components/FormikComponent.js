import React from "react";
import { Formik, Form } from "formik";
import { Button, Box } from "@mui/material/";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";

const FormikComponent = () => {
  return (
    <Box
      sx={{
        width: 400,
        margin: 2,
        padding: 2,
        border: "1px solid aqua",
      }}
    >
      <Formik
        initialValues={{ username: "", jobType: "", acceptedTos: false }}
        validationSchema={advancedSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
          }, 2000);
        }}
      >
        {(props) => (
          <Form>
            <Box sx={{ margin: 2 }}>
              <CustomInput
                label="Username"
                name="username"
                type="text"
                placeholder="enter your username"
              />
            </Box>
            <Box sx={{ margin: 2 }}>
              <CustomSelect
                label="job type"
                name="jobType"
                type="text"
                placeholder="please select a job"
              ></CustomSelect>
            </Box>
            <CustomCheckBox type="checkbox" name="acceptedTos" />
            <Button type="submit">submit</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormikComponent;
