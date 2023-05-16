import React, { useState, useEffect } from "react";
import UserWidget from "../widgets/userWidget";
import WidgetWrapper from "../../components/widgetWrapper";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
// import { is } from 'immer/dist/internal';
import IconTabs from "../widgets/mobileWidget";
import MyPostWidget from "../widgets/myPostWidget";
import AdvertWidget from "../widgets/advertWidget";
import StoryCarousel from "../../components/storyCarousel";
import axios from "axios";
import Conversation from "../../components/conversation";

function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const userDetails = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  // const {_id, picturePath} = useSelector((state)=>state.user)
  const fullName = userDetails.firstName + " " + userDetails.lastName;
  const followers = userDetails.followers;
  const following = userDetails.following;
  const location = userDetails.location;
  const occupation = userDetails.occupation;
  const [conversation, setConversation] = useState();
  console.log(userDetails._id);
  const id = userDetails._id;

  useEffect(() => {
    console.log("useeffect working");
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
  }, [id]);
  console.log("con",conversation);
  // const friendId = conversation.map((data)=>{
  //         data.filter((id)=>{

  //         })
  // })
  return (
    <Box>
      {isNonMobileScreens ? <Navbar /> : <IconTabs />}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget
            name={fullName}
            followers={followers}
            following={following}
            location={location}
            occupation={occupation}
          />
          <Box>
            <WidgetWrapper>
              <Typography>My Conversations</Typography>
              <Box>
              {conversation?.map((c) => {
                console.log(c)
                return <Conversation conversation={c} />;
              })}
              </Box>
            </WidgetWrapper>
          </Box>
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {/* <Box sx={{width:"100%"}}> */}
          <StoryCarousel />
          {/* </Box> */}

          <MyPostWidget />
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "32%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <AdvertWidget />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
