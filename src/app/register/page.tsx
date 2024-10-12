import {
  Stack,
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { Router, useRouter } from "next/router";
import { storeUserInfo } from "@/services/auth.services";
import { userLogin } from "@/services/actions/userLogin";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    console.log(data);
    try {
      const res = await registerPatient(data);

      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
              <Image
                src={assets?.svgs.logo}
                width={50}
                height={50}
                alt="logo"
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patience Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm onSubmit={handleRegister}>
              <Grid Container spacing={2}>
                <Grid item md={12}>
                  <PHInput
                    label="Outlined"
                    fullWidth={true}
                    name="patient.name"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="email"
                    label="Outlined"
                    fullWidth={true}
                    name="patient.email"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="password"
                    label="Outlined"
                    fullWidth={true}
                    name="password"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="tel"
                    label="Outlined"
                    fullWidth={true}
                    name="patient.contactNumber"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
                    required={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px ",
                }}
                fullWidth={true}
              >
                Register
              </Button>
              <Typography component="h6" fontWeight={600}>
                Do You Already Have an account ?{" "}
                <Link href="/login">login</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
