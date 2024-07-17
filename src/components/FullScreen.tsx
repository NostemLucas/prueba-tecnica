import { Box, Typography, CircularProgress } from "@mui/material";

interface Props {
  message?: string | undefined | null;
}

const FullScreenLoading = ({ message }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {message && (
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          {message}
        </Typography>
      )}
      <CircularProgress />
    </Box>
  );
};

export default FullScreenLoading;
