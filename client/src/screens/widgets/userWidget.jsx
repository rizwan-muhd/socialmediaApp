import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import FlexBetween from "../../components/flexBetween";
import UserImage from "../../components/userImage";
import WidgetWrapper from "../../components/widgetWrapper";
import axios from "axios";

const UserWidget = ({
  userId,
  picturePath,
  name,
  following,
  followers,
  occupation,
  location,
}) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const naviagate = useNavigate();
  const token = useSelector((state) => state.token);
  // const userDetails = useSelector((state)=> state.user)
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  // console.log("my user data",userDetails)
  // const fullName = userDetails.firstName +" "+ userDetails.lastName
  return (
    <WidgetWrapper>
      {/* <FlexBetween gap="1.2rem" pb="1.1rem" onclick={()=> naviagate(`/profile/${userId}`)}> */}
      <FlexBetween gap="1rem">
        <UserImage />
        <Box>
          <Typography
            variant="h4"
            color={dark}
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <FlexBetween>
            <Typography
              color={medium}
            >{`${followers?.length}   followers`}</Typography>
            <Typography
              color={medium}
            >{`${following?.length}  following`}</Typography>
          </FlexBetween>
        </Box>
      </FlexBetween>
      <ManageAccountsOutlined />

      <Divider />
      <Box p="1 rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <WorkOutlineOutlined />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>
      <Divider />

      <Box p="1 rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>who's viewed your profile</Typography>
          <Typography color={main} fontWeight="500">
            400
          </Typography>
        </FlexBetween>
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Impression of your profile</Typography>
          <Typography color={main} fontWeight="500">
            200
          </Typography>
        </FlexBetween>
      </Box>

      <Box>
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social profiles
        </Typography>
        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>

          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}> Network Platform</Typography>
            </Box>
          </FlexBetween>

          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>

      {/* </FlexBetween> */}
    </WidgetWrapper>
  );
};
export default UserWidget;
