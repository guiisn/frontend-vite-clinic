import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import { createClinic } from "./request";
import { schema } from "./schema";
import { Icon } from "@iconify/react";

export interface IClinic {
  name: string;
  street: string;
  number: string;
  district: string;
  nameAdm: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function ClinicForm() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [curentStep, setCurrentStep] = useState(1);

  const renderStep1 = () => (
    <>
      <InputAction
        label="Nome da clínica"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name"
        onChange={handleChange}
      />
      <Divider />
      <InputAction
        label="Rua da clínica"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="street"
        onChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <InputAction
          label="Número da clínica"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="number"
          onChange={handleChange}
        />
        <InputAction
          label="Bairro da clínica"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="district"
          onChange={handleChange}
        />
      </Box>
      <Button
        type="button"
        fullWidth
        variant="contained"
        onClick={() => setCurrentStep(2)}
      >
        Avançar <Icon icon="ic:baseline-arrow-right-alt" width={30} />
      </Button>
    </>
  );

  const renderStep2 = () => (
    <>
      <InputAction
        label="Nome do administrador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="nameAdm"
        onChange={handleChange}
      />
      <InputAction
        label="E-mail do administrador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="email"
        onChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <InputAction
          label="Senha do administrador"
          variant="outlined"
          fullWidth
          required
          type="password"
          name="password"
          onChange={handleChange}
        />
        <InputAction
          label="Confirme a senha"
          variant="outlined"
          fullWidth
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
      </Box>
      <ButtonAction type="submit" fullWidth variant="contained">
        <>
          Concluir Cadastro <Icon icon="ic:round-check" width={30} />
        </>
      </ButtonAction>
    </>
  );

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IClinic>({ resolver: yupResolver(schema) });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
  };

  const { mutate } = useMutation(createClinic, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/clinics`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = async (data: IClinic) => {
    mutate(data);

    reset();
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {curentStep === 1 ? renderStep1() : renderStep2()}
    </form>
  );
}
