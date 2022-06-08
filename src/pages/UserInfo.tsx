import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const UserInfo: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Typography variant="h3">User info</Typography>
    </Box>
  );
};

export default UserInfo;