import { useMemo, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { debounce } from 'lodash';
import { SearchGithubUser } from '../../features/github/githubSlice';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
const SearchBar = () => {
  const [input, setInput] = useState<string>('');
  const dispatch = useAppDispatch();

  const debounceSearch = useMemo(
    () =>
      debounce((value: string): void => {
        if (value.trim()) {
          dispatch(SearchGithubUser(value));
        }
      }, 500),
    [dispatch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
    debounceSearch(e.target.value);
  };

  return (
    <Box width="100%" mt={4} maxWidth={600}>
      <TextField
        fullWidth
        placeholder="Search Github UserName....."
        value={input}
        onChange={handleChange}
        variant="outlined"
        sx={{
          input: { color: 'var(--text)' },
          '& .MuiOutlinedInput-root': {
            bgcolor: 'var(--background)',
            borderRadius: 2,
            '& fieldset': { borderColor: '#30363d' },
            '&:hover fieldset': { borderColor: 'var(--border)' },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
