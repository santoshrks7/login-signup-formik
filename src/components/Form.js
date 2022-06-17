import React from "react";
import { useFormik } from "formik";
import { Box, Button, TextField } from "@mui/material/";
import EmailIcon from "@mui/icons-material/Email";
import { basicSchema } from "../schemas";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Form = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "", cnfPassword: "" },
    validationSchema: basicSchema,

    onSubmit: async (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      console.log("submitted");
    },
  });
  // console.log(formik);

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: 400,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: 3,
        padding: 2,
        border: "1px solid aqua",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <EmailIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
        <TextField
          name="email"
          variant="standard"
          label="email"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          color={formik.touched.email && formik.errors.email ? "error" : null}
        />
      </Box>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <VisibilityOffIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
        <TextField
          name="password"
          variant="standard"
          label="password"
          type="password"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          color={
            formik.touched.password && formik.errors.password ? "error" : null
          }
        />
      </Box>
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <VisibilityOffIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
        <TextField
          name="cnfPassword"
          variant="standard"
          label="confirm password"
          type="password"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cnfPassword}
          color={
            formik.touched.cnfPassword && formik.errors.cnfPassword
              ? "error"
              : null
          }
        />
      </Box>
      {formik.touched.cnfPassword && formik.errors.cnfPassword ? (
        <div>{formik.errors.cnfPassword}</div>
      ) : null}
      <Button
        disabled={formik.isSubmitting}
        type="submit"
        variant="contained"
        sx={{ margin: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;

// ====================
// import React from "react";
// import { useFormik } from "formik";
// import { Box, Button, TextField } from "@mui/material/";
// import EmailIcon from "@mui/icons-material/Email";
// import { basicSchema } from "../schemas";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// const Form = () => {
//   const formik = useFormik({
//     initialValues: { email: "", password: "", cnfPassword: "" },
//     validationSchema: basicSchema,

//     onSubmit:  (values, actions) => {
//       // alert(JSON.stringify(values, null, 2));
//       console.log("submitted");
//     },
//   });
//   // console.log(formik);

//   return (
//     <Box
//       component="form"
//       onSubmit={formik.handleSubmit}
//       // sx={{
//       //   width: 400,
//       //   display: "flex",
//       //   justifyContent: "center",
//       //   flexDirection: "column",
//       // }}
//     >
//       <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//         <EmailIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
//         <TextField
//           name="email"
//           variant="standard"
//           label="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//           color={formik.touched.email && formik.errors.email ? "error" : null}
//         />
//       </Box>
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}
//       <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//         <VisibilityOffIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
//         <TextField
//           name="password"
//           variant="standard"
//           label="password"
//           type="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//           color={
//             formik.touched.password && formik.errors.password ? "error" : null
//           }
//         />
//       </Box>
//       {formik.touched.password && formik.errors.password ? (
//         <div>{formik.errors.password}</div>
//       ) : null}
//       <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//         <VisibilityOffIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
//         <TextField
//           name="cnfPassword"
//           variant="standard"
//           label="cnfPassword"
//           type="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.cnfPassword}
//           color={
//             formik.touched.cnfPassword && formik.errors.cnfPassword
//               ? "error"
//               : null
//           }
//         />
//       </Box>
//       {formik.touched.cnfPassword && formik.errors.cnfPassword ? (
//         <div>{formik.errors.cnfPassword}</div>
//       ) : null}
//       <Button
//         type="submit"
//         variant="contained"
//         sx={{ margin: 2 }}
//       >
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default Form;
