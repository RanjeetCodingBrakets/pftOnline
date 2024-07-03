import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, 
  Phone as PhoneIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// StyledButton component to style the language dropdown button
const StyledButton = styled(Button)({
  backgroundColor: '#ffa726',
  color: 'white',
  border: '1px solid white',
  borderRadius: '20px',
  padding: '5px 20px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#ffb74d',
  },
});

const TopHeader = () => {
  // State to manage the anchor element for the dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Event handler for opening the dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar component={"nav"} position="static" sx={{ bgcolor: '#F9A331' }}>
        <Toolbar sx={{ flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: isMobile ? 0 : 0.1, mb: isMobile ? 1 : 0 }}>
            <LocationOnIcon />
            <Typography variant="body1" sx={{ ml: 1, fontSize: isMobile ? '12px' : '14px' }}>
              199 George St, The Rocks NSW 2000, Australia
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: isMobile ? 0 : 1, mb: isMobile ? 1 : 0 }}>
            <PhoneIcon />
            <Typography variant="body1" sx={{ ml: 1, fontSize: isMobile ? '12px' : '14px' }}>
              (123) 456-7890
            </Typography>
          </Box>
          
          {/* Box for the language selection button and menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: isMobile ? 0 : 0.1, mb: isMobile ? 1 : 0 }}>
            <StyledButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
            >
              English
            </StyledButton>

            {/* Dropdown menu for language selection */}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>Spanish</MenuItem>
              <MenuItem onClick={handleClose}>French</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: isMobile ? 0 : 0.1 }}>
            <IconButton color="inherit" aria-label="Facebook" component={Link} to="#">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter" component={Link} to="#">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram" component={Link} to="#">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopHeader;
