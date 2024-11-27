import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useUserAuth } from './context/UserAuthProvider';

const pages = [
  { name: 'Home', path: '/home' },
  { name: 'Destinations', path: 'destinations' },
  { name: 'Tour Packages', path: 'tour-packages' },
  { name: 'Transport Booking', path: 'transport-booking' },
  { name: 'Hotels Booking', path: 'hotels-booking' },
  { name: 'About', path: 'about' },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { Logout } = useUserAuth();

  const handleLogout = () => {
    Logout();
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ marginTop: 2, backgroundColor: 'orange' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mr: 2 }}>
            <TravelExploreIcon sx={{ fontSize: 40, color: 'green' }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontFamily: 'Arial, sans-serif',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Tour App
            </Typography>
          </Box> */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className=" text-white ml-3 text-2xl font-bold">ExploreWorld</span>
          </a>


          {/* Hamburger Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                // sx={{ my: 2, color: 'black', display: 'block', }}
                sx={{
                  my: 2, color: 'black',
                  '&:hover': { color: 'white', },
                }}

              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Desktop Menu
          {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Link to={page.path} style={{ textDecoration: 'none', width: '100%' }}>
              <Typography sx={{ textAlign: 'center', color: 'black' }}>
                {page.name}
              </Typography>
            </Link>
          </MenuItem>
        ))} */}

          <Button
            variant="outlined"
            onClick={() => handleLogout()}
            sx={{
              borderColor: 'white', color: 'white',
              '&:hover': { backgroundColor: 'white', color: 'orange', },
            }}>
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
