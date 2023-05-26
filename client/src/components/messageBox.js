import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import FlexBetween from "./flexBetween";
import WidgetWrapper from "./widgetWrapper";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Box,
  IconButton,
  InputBase,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import UserImage from "./userImage";
import Badge from "@mui/material/Badge";
// import state from "../state";
import {format} from 'timeago.js'
import {io} from 'socket.io-client'

function MessageBox({ name }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  console.log("current user",user)
  const conversationId = useSelector((state) => state.conversationId);
  const { palette } = useTheme();
  const light = palette.neutral.light;
  const medium = palette.neutral.medium;
  // const num = [1, 2, 3, 4, 3, 32];
  const [messages, setMessages] = useState();
 const socket = useRef(io('ws://localhost:8900'))
 const online = true
  

  useEffect(()=>{
    socket.current.emit("addUser",user?._id)
  },[user])

  useEffect(() => {
    const getChat = async () => {
      await axios
        .get("http://localhost:8080/api/messages/chat", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            conversationId: conversationId,
          },
        })
        .then((res) => {
          // console.log(res.data.message)
          setMessages(res?.data?.message);
        });
    };
    conversationId && getChat();
  }, [conversationId, token]);

  const handleSendMessage = async() => {
   
      await axios.post("http://localhost:8080/api/messages/chat",{
      
      })
    

  };

  return (
    <>
      <WidgetWrapper>
        <FlexBetween>
         {online ? <Badge overlap="circular" badgeContent=" " color="success">
            <UserImage />
          </Badge> :<UserImage />}
          <Typography>{name}</Typography>
          <Typography>Last seen 12:00pm</Typography>
        </FlexBetween>
        <Box sx={{ height: "70vh", overflow: "hidden", overflowY: "scroll" }}>
          {messages?.map((data) => {
            return (
              <>
                {data.sender === user._id && (
                  <>
                    <Box
                      sx={{
                        backgroundColor: light,
                        borderRadius: "1rem",
                        padding: "10px",
                        display: "flex",
                        width: "fit-content",
                        justifyContent: "end",
                        marginLeft: "auto",
                        marginBottom: "5px",
                      }}
                    >
                      <FlexBetween>
                        <Typography>{data.text}</Typography>
                      </FlexBetween>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        width: "fit-content",
                        justifyContent: "end",
                        marginLeft: "auto",
                      }}
                    >
                      <Typography>{format(data.createdAt)}</Typography>
                    </Box>
                  </>
                )}
                {data.sender !== user._id && (
                  <>
                    <Box
                      sx={{
                        backgroundColor: medium,
                        borderRadius: "1rem",
                        padding: "10px",
                        display: "flex",
                        width: "fit-content",
                        justifyContent: "end",
                        marginRight: "auto",
                        marginBottom: "5px",
                      }}
                    >
                      <FlexBetween>
                        <Typography>{data.text}</Typography>
                      </FlexBetween>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        width: "fit-content",
                        justifyContent: "end",
                        marginRight: "auto",
                      }}
                    >
                      <Typography>{format(data.createdAt)}</Typography>
                    </Box>
                  </>
                )}
              </>
            );
          })}
        </Box>
      </WidgetWrapper>
      <InputBase
        fullWidth
        placeholder="chathere..."
        sx={{ backgroundColor: light, borderRadius: "1rem", padding: "5px" }}
        endAdornment={
          <IconButton>
            <SendIcon onClick={handleSendMessage} />
          </IconButton>
        }
      />
    </>
  );
}

export default MessageBox;
