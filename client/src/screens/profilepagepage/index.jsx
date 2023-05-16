import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PostsWidget from "../widgets/postsWidget";
import UserWidget from "../widgets/userWidget";
import WidgetWrapper from "../../components/widgetWrapper";
import FlexBetween from "../../components/flexBetween";

import { padding } from "@mui/system";
import ImagesList from "../../components/imageList";
import axios from "axios";
import { useSelector } from "react-redux";
import MessageBox from "../../components/messageBox";

function ProfilePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  let { id } = useParams();
  console.log("user id", id);
  const light = palette.neutral.light;
  const [userDetails, setUserDetails] = useState();
  const [conversation,setConversation] = useState()
  const token = useSelector((state) => state.token);
  console.log(token);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id: id,
        },
      })
      .then((res) => {
        // console.log("axios data",res.data)
        setUserDetails(res.data.user);
      });
      getConversation()
  }, [id]);

  // useEffect(()=>{
     const getConversation =()=>{
      try {
        axios
          .get("http://localhost:8080/api/conversation", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              userId: id,
            },
          })
          .then((res) => {
            // console.log("axios res", res.data);
            setConversation(res.data.message);
          });

         
      } catch (error) {
        console.log(error);
      }
     }
     
  // },[id])

  console.log("conversation",setConversation)
  console.log("userDetails", userDetails);
  const fname = userDetails?.firstName ? userDetails?.firstName : " ";
  const lname = userDetails?.lastName ? userDetails?.lastName : "";
  const fullName = fname + " " + lname;
  const followers = userDetails?.followers
  
  // console.log(followers?.length)
  const following = userDetails?.following
  // const location = userDetails.location;
  // const occupation = userDetails.occupation;
  console.log(fullName);
  return (
    <>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        //  justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget
           name={fullName}
           followers={followers}
           following={following}
          //  location={location}
          //  occupation={occupation}
          />
        </Box>

        <WidgetWrapper>
          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            {/* <PostsWidget/> */}
            <ImagesList />
          </Box>
        </WidgetWrapper>

        <Box
          flexBasis={isNonMobileScreens ? "30%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <WidgetWrapper>
            <MessageBox name={fullName}/>
          </WidgetWrapper>
        </Box>
      </Box>
    </>
  );
}

export default ProfilePage;
