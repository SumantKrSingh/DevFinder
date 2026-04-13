import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import type { GithubUser } from '../../types/github.types';

const UserCard = ({ user }: { user: GithubUser }) => {
  return (
    <Card
      sx={{
        bgcolor: 'var(--background)',
        borderRadius: 4,
        border: '1px solid var(--border)',
        maxWidth: 600,
        width: '100%',
        mt: 4,
      }}
    >
      <CardContent>
        {/* Avatar + Name + Bio */}
        <Stack direction="row" spacing={3} alignItems="center" mb={3}>
          <Avatar
            src={user.avatar_url}
            alt={user.name ?? ''}
            sx={{ width: 80, height: 80 }}
          />
          <Box>
            <Typography variant="h6" color="white" fontWeight={700}>
              {user.name ?? user.login}
            </Typography>
            <Typography variant="body2" color="gray">
              @{user.login}
            </Typography>
            <Typography variant="body2" color="#96a6b8" mt={1}>
              {user.bio ?? 'No bio available'}
            </Typography>
          </Box>
        </Stack>

        {/* Stats */}
        <Stack direction="row" spacing={2}>
          <Chip
            label={`Repos: ${user.public_repos}`}
            sx={{ bgcolor: 'var(--chip-bg)', color: 'var(--text)' }}
          />
          <Chip
            label={`Followers: ${user.followers}`}
            sx={{ bgcolor: 'var(--chip-bg)', color: 'var(--text)' }}
          />
          <Chip
            label={`Following: ${user.following}`}
            sx={{ bgcolor: 'var(--chip-bg)', color: 'var(--text)' }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserCard;
