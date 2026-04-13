import { Box, Button, Paper, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { loginWithGoogle } from '../../services/authService';
const LoginPage = () => {
  const handleLogin = async (): Promise<void> => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ bgcolor: 'var(--background)' }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 6,
          borderRadius: 4,
          bgcolor: 'var(--paper)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          minWidth: 340,
        }}
      >
        <Typography variant="h4" fontWeight={700} color="var(--primary)">
          DevFinder
        </Typography>
        <Typography variant="body2" color="gray">
          Search GitHub profiles instantly
        </Typography>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          onClick={handleLogin}
          fullWidth
          sx={{
            bgcolor: '#238636',
            '&:hover': { bgcolor: '#2ea043' },
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Continue with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
