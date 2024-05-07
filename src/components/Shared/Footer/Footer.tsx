import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)">
      <Container>
        <Stack direction="row" gap={4} justifyContent="center" pt={3}>
          <Typography component={Link} href="/consultation" color="#FFF">
            Consultation
          </Typography>
          <Typography color="#FFF">Health Plans</Typography>
          <Typography color="#FFF">Medicine</Typography>
          <Typography color="#FFF">Diagnostics</Typography>
          <Typography color="#FFF">NGOs</Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image
            src={facebookIcon}
            width={30}
            height={30}
            alt="facebook"
          ></Image>
          <Image
            src={instagramIcon}
            width={30}
            height={30}
            alt="facebook"
          ></Image>
          <Image
            src={twitterIcon}
            width={30}
            height={30}
            alt="facebook"
          ></Image>
          <Image src={linkedIcon} width={30} height={30} alt="facebook"></Image>
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>

        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography color="#FFF" component="p">
            @2023 PH Health Care. All rights reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>

          <Typography component="p" color="white">
            Private Policy ! Terms of Use
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
