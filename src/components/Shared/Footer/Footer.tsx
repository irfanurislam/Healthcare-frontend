import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consutance">
            Consultancy
          </Typography>
          <Typography color="#fff">Health Plans </Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagonistics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="facebook" />
          <Image src={twitterIcon} width={30} height={30} alt="facebook" />
          <Image src={linkedIcon} width={30} height={30} alt="facebook" />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          "
          gap={3}
        >
          <Typography varinat="p" color="#fff">
            &copy; 2024 ph Health Care all rights reserved
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="#fff"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color="#fff">
            Privacy poliscy terms and condidiotn
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
