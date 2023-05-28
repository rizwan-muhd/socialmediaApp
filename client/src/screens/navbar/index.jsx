import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
  NearMe,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setlogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/flexBetween";
import { width } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import SimpleDialog from "../../components/dialogueBox";
import Badge from "@mui/material/Badge"; 

function Navbar() {
  const [isMobileMenuToggled, seIsMobileMenuToggled] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const neutraLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const name = user.firstName.charAt(0)+""+user.lastName.charAt(0)
  

  const handleDialogueShow = () => {
    setShow(!show);
  };

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt} gap="10px">
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onclick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          sociopedia
        </Typography>
      </FlexBetween>
      {isNonMobileScreens && (
        <FlexBetween
          backgroundColor={neutraLight}
          borderRadius="9px"
          gap="3rem"
          padding="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      )}

      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Badge badgeContent={4} color="success">
            <Message sx={{ fontSize: "25px" }} />
          </Badge>

          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={name}>
            <Select
              // value={name}
              sx={{
                backgroundColor: neutraLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutraLight,
                },
              }}
            >
              input={<InputBase />}
              <MenuItem value="Rizwan">
                <Typography>Rizwan</Typography>
              </MenuItem>
              <MenuItem onclick={() => dispatch(setlogout())}>Logout</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => seIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => seIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value="Rizwan">
              <Select
                value="Rizwan"
                sx={{
                  backgroundColor: neutraLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutraLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value="Rizwan">
                  <Typography>Rizwan</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setlogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
      <Avatar
        alt={name}
        src="/static/images/avatar/1.jpg"
        onClick={handleDialogueShow}
      >{name}</Avatar>
      {show && <SimpleDialog />}
    </FlexBetween>
  );
}

export default Navbar;
