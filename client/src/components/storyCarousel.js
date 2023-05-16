import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import WidgetWrapper from './widgetWrapper';
import { width } from '@mui/system';
import { setOpenStoryView } from '../state';
import StoryViewModal from './storyViewModal';
import {Box,usethem} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch,useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top:65,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: `${theme.palette.primary.dark}`,
    padding:'5px',
    height:"20px",
    width:"20px",
  },
}));


export default function StoryCarousel() {

  const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 
  const dispatach = useDispatch()
  const handleView =()=>{
     console.log("handleview")
     setOpen(true)
      dispatach( setOpenStoryView(true))
  }

  const status =useSelector((state)=> state.storyViewModal)
  console.log("status",status)

 
  return (
    <>
   <WidgetWrapper  sx={{overflowX:"scroll", width:"40rem" }}>
    <Stack direction="row" spacing={1}>
    <StyledBadge badgeContent={"+"} color="secondary">
    <Avatar  alt="Remy Sharp" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}  onClick={handleView}/>
      </StyledBadge>
     
      <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/landscape-hills-covered-greenery-surrounded-by-sea-cloudy-sky-during-sunset_181624-15256.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
      <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}/>
      <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/red-sedan-car-test-drive-highway_114579-4061.jpg?size=626&ext=jpg&ga=GA1.1.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}/>
      <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/silver-metallic-color-sport-sedan-road_114579-5035.jpg?size=626&ext=jpg&ga=GA1.1.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}/>
      <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?size=626&ext=jpg&ga=GA1.1.1009971292.1681368022&semt=robertav1_2_sidr"sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
      <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/landscape-hills-covered-greenery-surrounded-by-sea-cloudy-sky-during-sunset_181624-15256.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr"sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
     
      <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr"sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
      <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/summer-background-sea-water_64049-160.jpg?size=626&ext=jpg&ga=GA1.1.1009971292.1681368022&semt=robertav1_2_sidr"sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
      <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}/>
     <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/summer-background-sea-water_64049-160.jpg?size=626&ext=jpg&ga=GA1.1.1009971292.1681368022&semt=robertav1_2_sidr"sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
      <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}/>
     <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/summer-background-sea-water_64049-160.jpg?size=626&ext=jpg&ga=GA1.1.1009971292.1681368022&semt=robertav1_2_sidr"sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
      <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}/>
    <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/summer-background-sea-water_64049-160.jpg?size=626&ext=jpg&ga=GA1.1.1009971292.1681368022&semt=robertav1_2_sidr"sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
      <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}/>
    <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/summer-background-sea-water_64049-160.jpg?size=626&ext=jpg&ga=GA1.1.1009971292.1681368022&semt=robertav1_2_sidr"sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}} />
      <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr" sx={{border:"2px solid",
    borderColor:" #d62976",width:"5rem", height:"5rem"}}/>
    </Stack>
    </WidgetWrapper>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.1009971292.1681368022&semt=robertav1_2_sidr'/>
        </Box>
      </Modal>
    </>
  );
}