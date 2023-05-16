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
import GoogleIcon from '@mui/icons-material/Google';
import {EditOutlinedIcon }from "@mui/icons-material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/flexBetween";
import axios from 'axios'



const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});



const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  

  

  const login = async (values, onSubmitProps) => {
    console.log("login",values)
     await axios.post( "http://localhost:8080/api/user/login",values
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    ).then((res)=>{
        dispatch(setLogin(res.data))
        navigate('/home')
    });
    onSubmitProps.resetForm();
    
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
     await login(values, onSubmitProps);
    
  };

 
  return (
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
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box   display="flex"
            gap="10px"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              justifyContent:"center",
              alignItems:"center"
              
            }}>
            <IconButton>
            <GoogleIcon/>
            </IconButton>
            <Typography>
              Login using google account
            </Typography>
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
              {"login"}
            </Button>
            <Link to="/signup">
            <Typography
              // onClick={
              //   navigate('/signup')
              // }
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {"Don't have an account? Sign Up here."}
            </Typography>
            </Link>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;