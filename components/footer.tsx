import React, { ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";



export default function Footer():ReactElement{ 
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        marginTop:50,
        paddingBottom:"auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Nextjs App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Next.js | Material UI | Next.js Victor Adrian`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
