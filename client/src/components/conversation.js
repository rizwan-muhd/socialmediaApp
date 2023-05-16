import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./flexBetween";
import UserImage from "./userImage";
import axios from "axios";
import { useEffect, useState } from "react";
import { setLogin, setFollowing ,setConversationId} from "../state";

const Conversation = ({ conversation }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, following } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const userId = _id;
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const [userDetails, setUserDetails] = useState([]);
  const isFriend = true;
  console.log("useeffect", conversation);
  console.log("conversation-id", conversation._id);
  useEffect(() => {
    const friendId = conversation.members.find((id) => id !== userId);

    const getUser = async () => {
      await axios
        .get("http://localhost:8080/api/user/getUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            id: friendId,
          },
        })
        .then((res) => {
          setUserDetails(res.data.user);
        });
    };
    getUser();
  }, []);
  console.log("userdetails", userDetails);
  const name = userDetails.firstName + "" + userDetails.lastName;

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage />
        <Box
          onClick={() => {
            dispatch(setConversationId(conversation._id))
            navigate(`/profile/${userDetails._id}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
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
          <Typography color={medium} fontSize="0.75rem">
            {/* {subtitle ? subtitle : ""} */}
            hei
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton sx={{ backgroundColor: primaryLight, p: "0.6rem" }}>
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Conversation;
