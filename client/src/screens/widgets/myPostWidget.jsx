import { EditOutlined,DeleteOutlineOutlined,AttachFileOutlined,GifBoxOutlined,ImageOutlined,MicOutlined,MoreHorizOutlined } from "@mui/icons-material";
import {
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery
} from "@mui/material"
import FlexBetween from "../../components/flexBetween"
import Dropzone from 'react-dropzone'
// import {useDropzone} from 'react-dropzone'
import UserImage from '../../components/userImage';
import WidgetWrapper from "../../components/widgetWrapper";
import { useState,useCallback } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { setPost } from "../../state";
import { borderRadius } from "@mui/system";
import PostsWidget from "./postsWidget";

const MyPostWidget = ({ picturepath})=>{
    const dispatch = useDispatch();
    const [isImage,setIsImage] = useState(false);
    const [image,setImage]= useState(null);
    const [post,setPost]=useState("");
    const {palette} = useTheme();
    // const {_id} = useSelector((state)=> state.user)
    // const token = useSelector((state)=> state.token);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const mediumMain = palette.neutral.mediumMain
    const medium = palette.neutral.medium
   console.log("image",image)
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log("file",acceptedFiles)
      }, [])
      // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <WidgetWrapper>
           <FlexBetween gap="1.5rem">
              <UserImage image ={picturepath}/>
              <InputBase
              placeholder="What is on your mind"
            //   onChange={}
              sx={{
                width:"100%",
                backgroundColor:palette.neutral.light,
                borderRadius:"2rem",
                padding:"1rem 2rem"
              }}
              />
           </FlexBetween>
           {/* <flexBetween> */}
            <Box border={`1px solid ${medium}`}
            borderRadius="5px"
            mt="1rem"
            p="1rem"
            >
            <Dropzone acceptedFiles=".jpg,.jpeg,.png"  onDrop={acceptedFiles => setImage(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
    // <FlexBetween>
      <Box
       {...getRootProps()}
       border={`2px dashed ${palette.primary.main}`}
       p="1rem"
       sx={{"&:hover":{cursor:"pointer"}}}
       >
        <input {...getInputProps()} /> 
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Box>
      // </FlexBetween>
  )}
</Dropzone>
            </Box>

            <Divider sx={{margin:"1.25rem 0"}}/>
            {/* <WidgetWrapper> */}
            <FlexBetween>
              <FlexBetween gap="0.25rem" onClick={()=>setIsImage(!isImage)}>
              <ImageOutlined sx={{color:mediumMain}}/>
              <Typography color={mediumMain}
              sx={{"&:hover":{
                cursor:"pointer",color:medium
              }}}
              >
               Image
              </Typography>
            </FlexBetween>
            {isNonMobileScreens ?<> <FlexBetween gap="0.25rem">
                <GifBoxOutlined sx={{color:mediumMain}}/>
                <Typography color={mediumMain}>Clip</Typography>
              </FlexBetween>
              <FlexBetween gap="0.25rem">
                <AttachFileOutlined sx={{color:mediumMain}}/>
                <Typography color={mediumMain}>Attachment</Typography>
              </FlexBetween>
              <FlexBetween gap="0.25rem">
                <MicOutlined sx={{color:mediumMain}}/>
                <Typography color={mediumMain}>Mic</Typography>
              </FlexBetween>
             
               </>: <FlexBetween gap="0.25rem">
                <MoreHorizOutlined sx={{color:mediumMain}}/>
                {/* <Typography color={mediumMain}>Mic</Typography> */}
              </FlexBetween>}

              <Button
              disabled={!post}
              // onClick={handlePost}
              sx={{
                color:palette.background.alt,
                backgroundColor:palette.primary.main,
                borderRadius:"3rem",
              }}>
               Post
              </Button>

               {/* {isNonMobileScreens ? :""} */}
            
            </FlexBetween>
            <PostsWidget/>
           
        </WidgetWrapper>
    )
}

export default MyPostWidget