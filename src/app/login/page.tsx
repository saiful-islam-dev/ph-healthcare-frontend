import {
  Container,
  Box,
  Stack,
  TextField,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import assets from "@/assets";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <Grid container spacing={2} my={1}>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
            </Grid>

            <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
              Forgot Password?
            </Typography>

            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
            >
              Login
            </Button>
            <Typography>
              Don&apos;t have an account?{" "}
              <Link href="/register">Create an account</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
