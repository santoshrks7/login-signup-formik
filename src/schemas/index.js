import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 characters , 1 upper case, 1 lower case, 1 numeric digit

export const basicSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  cnfPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match")
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "username must be atleast 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["developer", "designer", "manager", "tester", "other"])
    .required("required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "please accept the terms of services"),
});

//   age: yup.number().positive().integer().required("Required"),
