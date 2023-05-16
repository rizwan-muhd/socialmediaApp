import { Typography, useTheme,Box } from "@mui/material";
import { useState,useEffect } from "react";
import axios from 'axios'
// import {Box} from "@mui/material";
import FlexBetween from "../../components/flexBetween";
import Friend from "../../components/friends";
import WidgetWrapper from "../../components/widgetWrapper";
import { useSelector } from "react-redux";

const AdvertWidget = ()=>{

    const {palette} = useTheme()
    const [userList,setUserList]= useState([])
    const token = useSelector((state)=>state.token)
    const dark= palette.neutral.dark;
    const main= palette.neutral.main;
    const medium= palette.neutral.medium;
    const Num = [1,2,3,4,5]

    useEffect(()=>{
        axios.get("http://localhost:8080/api/user/alluser",{
            headers: {
                        Authorization: `Bearer ${token}`
                      }
        }).then((res)=>{
             setUserList(res.data.users)
        })
    },[])
    console.log("userlist",userList)

    return (
        <WidgetWrapper>
            <FlexBetween color={dark} variant="h6" fontWeight="500">
                <Typography>Sponsered</Typography>
                <Typography color={medium}>Create Ad</Typography>

            </FlexBetween>
            <img
              width="100%"
              height="auto"
              alt="advert"
              src="https://img.freepik.com/free-photo/beautiful-scenery-greenfield-cloudy-sky_181624-6434.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr"
              style={{borderRadius:"0.75rem", margin:"0.7rem 0"}}
            />
            <Typography>My Suggestions</Typography>
            {userList.map((data)=>{
                return(
                    <Box  m="1rem">
                    <Friend friendId={data._id} name={ data.lastName? data.firstName + data.lastName :data.firstName}/> 
                    </Box>
                )
                
            })}
           
         </WidgetWrapper> 
    )

}

export default AdvertWidget