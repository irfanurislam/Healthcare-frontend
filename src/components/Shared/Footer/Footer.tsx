import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
        <Stack direction="row" justifyContent="center" gap={3}>
          <Image src={""} width={30} height={30} alt="faebok" />
          <Image src={""} width={30} height={30} alt="faebok" />
          <Image src={""} width={30} height={30} alt="faebok" />
          <Image src={""} width={30} height={30} alt="faebok" />
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
