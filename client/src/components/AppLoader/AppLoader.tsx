import { Box, CircularProgress } from '@mui/material';

const AppLoader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ color: '#0d1117' }}
    >
      <CircularProgress sx={{ bgcolor: '#58a6ff' }} />
    </Box>
  );
};

export default AppLoader;
