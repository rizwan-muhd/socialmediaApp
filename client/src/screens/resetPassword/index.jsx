import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import WidgetWrapper from "../../components/widgetWrapper";


const loginSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm password is required").test("password-match","password must match",function(value){
    return this.parent.password === value;
  }),
});



const initialValuesLogin = {
  password: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  

  

  const reset = async (values, onSubmitProps) => {
    console.log("reset",values)
    // const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });
    // const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    // if (loggedIn) {
    //   dispatch(
    //     setLogin({
    //       user: loggedIn.user,
    //       token: loggedIn.token,
    //     })
    //   );
    //   navigate("/home");
    // }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
     await reset(values, onSubmitProps);
    
    // navigate('/home')
  };

 
  return (
    <Box sx={{display:"flex",justifyContent:"center" ,marginTop:"10rem"}}>
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, 
            }}
          >
           

            <TextField
              label="password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" ,width:"20rem"}}
              
            />
            <TextField
              label="confirmPassword"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirmPassword}
              name="confirmPassword"
              error={Boolean(touched.confirmPassword) && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          
          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              {"Reset"}
            </Button>
            
          </Box>
        </form>
      )}
    </Formik>
    </Box>
  );
};

export default ResetPassword;