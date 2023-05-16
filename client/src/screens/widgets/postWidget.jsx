import React,{useState} from 'react'
import { ChatBubbleOutlineOutlined,FavoriteBorderOutlined,FavoriteOutlined,ShareOutlined } from "@mui/icons-material";
import {Box,Divider,IconButton,Typography,useTheme} from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import FlexBetween from "../../components/flexBetween";
import { setPost } from "../../state";
import WidgetWrapper from "../../components/widgetWrapper";
import Friend from "../../components/friends";

const PostWidget =({
    postId,
    postUserId,
    name,
    postDescription,
    postLocation,
    postPicturePath,
    postUserPicturePath,
    postLikes,
    postComments,
})=>{
    const [isComments,setIsComments] = useState(false);
    const dispatch = useDispatch();
    // const token = useSelector((state)=>state.token);
    // const loggedInUserId = useSelector((state)=>state.user._id)
    // const isLiked = Boolean(likes(loggedInUserId));
    // const likeCount = Object.keys(likes).length;
   const isLiked = true

    const {palette} = useTheme();
    const primary = palette.primary.main;
    const main = palette.neutral.main;
    const PostPicturePath = true

    return(
        <WidgetWrapper m="2rem 0" sx={{padding:"0rem"}}>
            <Friend 
            //  friendId={postUserId}
            //  name={name}
            //  subtitle={postLocation}
            //  userPicturePath={postUserPicturePath}

            />
            <Typography color={main} sx={{mt:"1rem"}}>
                hello
            </Typography>
            {PostPicturePath && <img width="100%" height="auto" alt="post" style={{borderRadius :"0.75rem" , marginTop:"0.75rem"}} src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr"
            />}

            <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
                   <FlexBetween gap="0.3rem">
                       <IconButton>
                        {isLiked ? <FavoriteOutlined sx={{color:primary}}/>:<FavoriteBorderOutlined/>}
                       </IconButton>
                       <Typography>100</Typography>
                   </FlexBetween>
                   <FlexBetween gap="0.3rem">
                       <IconButton>
                        {isLiked ? <ChatBubbleOutlineOutlined sx={{color:primary}}/> : <ChatBubbleOutlineOutlined/>}
                       </IconButton>
                       <Typography>100</Typography>
                   </FlexBetween>
                        <IconButton>
                          <ShareOutlined/>
                        </IconButton>
                </FlexBetween>

            </FlexBetween>

        </WidgetWrapper>
    )

}
export default PostWidget