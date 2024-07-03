import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/logo.jpeg';


const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#A0663A', 
  color: 'white',
  borderRadius: '20px',
  padding: '8px 16px',
  textTransform: 'none', 
  '&:hover': {
    backgroundColor: '#8a5531', 
  },
}));

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <AppBar position="static"  component={"nav"} sx={{bgcolor: "#FFFFFF"}}>
          <Toolbar>
          <Box sx={{  display: 'flex', alignItems: 'center', flexgrow: 2}}>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
          </Box>

          <Box sx={{display: 'flex', flexGrow: 2,  alignItems: 'center'}}>
          <Button variant="text" component={Link} to="/">Home</Button>
          <Button
        aria-controls="simple-menu"dispa
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        style={{ color: '#666', textTransform: 'none' }}>
        CATEGORIES
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Category 1</MenuItem>
        <MenuItem onClick={handleClose}>Category 2</MenuItem>
        <MenuItem onClick={handleClose}>Category 3</MenuItem>
      </Menu>
  
      <Button varient="text" component={Link} to="/about-us">About Us</Button>
      <Button variant="text" component={Link} to="#">Contact Us</Button>
          
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: .1}}>
          <StyledButton>
              Login / SignUp
            </StyledButton>
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
    // <nav>
    //     <ul>
    //     <li>
    //         <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //         <Link to="/about-us">About Us</Link>
    //     </li>
    //     </ul>
    // </nav>
  );
}

export default Header;