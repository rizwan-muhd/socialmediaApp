import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./flexBetween";
import UserImage from "./userImage";
import axios from "axios";
import { useEffect, useState } from "react";
import { setLogin, setFollowing } from "../state";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
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
  const isFriend = following.find((friend) => friend === friendId);

  const handleFollow = async (id) => {
    const userId = id;
    await axios.post(
      "http://localhost:8080/api/user/follow",
      { userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await axios
      .get("http://localhost:8080/api/user/myuser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("working");
        console.log(res);
        dispatch(setFollowing(res.data));
      });
    console.log("id", id);
  };
  const handleUnfollow = async (id) => {
    const userId = id;
    await axios.put(
      "http://localhost:8080/api/user/unfollow",
      { userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await axios
      .get("http://localhost:8080/api/user/myuser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // setUserDetails(res.data.user)
        dispatch(setFollowing(res.data));
      });
  };

  

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
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
            {subtitle ? subtitle : ""}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton sx={{ backgroundColor: primaryLight, p: "0.6rem" }}>
        {isFriend ? (
          <PersonRemoveOutlined
            sx={{ color: primaryDark }}
            onClick={() => handleUnfollow(friendId)}
          />
        ) : (
          <PersonAddOutlined
            sx={{ color: primaryDark }}
            onClick={() => handleFollow(friendId)}
          />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
