import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { logOut } from '../../services/authService';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'var(--background)' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DevFinder
          </Typography>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{
              fontSize: 22,
            }}
          >
            {theme === 'dark' ? '🌞' : '🌚'}
          </IconButton>
          <Button onClick={logOut} color="inherit">
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
