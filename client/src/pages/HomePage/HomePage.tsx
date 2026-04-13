import { Box } from '@mui/material';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useAppSelector } from '../../hooks/redux.hooks';
import UserCard from '../../components/UserCard/UserCard';

const HomePage = () => {
  const { user, loading, error } = useAppSelector((state) => state.github);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        sx={{ bgcolor: 'var(--background)', p: 4 }}
      >
        <SearchBar />
        {loading && <Box>Searching.....</Box>}
        {error && <Box>{error}</Box>}
        {user && <UserCard user={user} />}
      </Box>
    </>
  );
};

export default HomePage;
