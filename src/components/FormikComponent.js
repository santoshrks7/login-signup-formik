import React from "react";
import { Formik, Form, Field } from "formik";
import { Box, Button, TextField } from "@mui/material/";
import PersonIcon from "@mui/icons-material/Person";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";

const FormikComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{ username: "", jobType: "", acceptedTos: false }}
        validationSchema={advancedSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="enter your username"
            />
            <CustomSelect
              label="job type"
              name="jobType"
              placeholder="please select a job"
            >
              <option value="">Please select job title</option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
              <option value="manager">product manager</option>
              <option value="tester">tester</option>
              <option value="other">other</option>
            </CustomSelect>
            <Button type="submit">submit</Button>
          </Form>

          //   <Box component="form" onSubmit={props.handleSubmit}>
          //     <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          //       <PersonIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
          //       <TextField
          //         name="name"
          //         variant="standard"
          //         label="name"
          //         onChange={props.handleChange}
          //         onBlur={props.handleBlur}
          //         value={props.values.name}
          //         color={props.touched.name && props.errors.name ? "error" : null}
          //       />
          //       {props.touched.name && props.errors.name ? (
          //         <div>{props.errors.name}</div>
          //       ) : null}

          //       <Button type="submit" variant="contained" sx={{ margin: 2 }}>
          //         Submit
          //       </Button>
          //     </Box>
          //   </Box>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponent;
