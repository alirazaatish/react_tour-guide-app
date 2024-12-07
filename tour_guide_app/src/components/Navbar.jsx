import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';



function Navbar() {
 
  return (
    <AppBar position="static" sx={{ marginTop: 2, backgroundColor: '#F57C00' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
