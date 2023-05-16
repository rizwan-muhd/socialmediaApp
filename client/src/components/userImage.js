import {Box} from "@mui/material"


const UserImage =({image,size="60px"})=>{
    return (
        <Box width={size} height={size} >
           <img style={{objectFit:"cover", borderRadius:"50%"}}
           width={size}
           height={size}
           alt="user"
           src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400">

           </img>
        </Box>
    )
}
export default UserImage