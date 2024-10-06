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
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { Router, useRouter } from "next/router";

interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}
interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}
const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);
    console.log(data);
    try {
      const res = await registerPatient(data);

      if (res?.data?.id) {
        toast.success(res.message);
        router?.push("/login");
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
            <form>
              <Grid Container spacing={2}>
                <Grid item md={12}>
                  <TextField
                    id="Name"
                    label="Outlined"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="Email"
                    type="email"
                    label="Outlined"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="Password"
                    type="password"
                    label="Outlined"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="Contact Number"
                    type="tel"
                    label="Outlined"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="Address"
                    type="text"
                    label="Outlined"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.address")}
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
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
