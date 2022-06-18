import { Box } from "@mui/material";
import PaperAtom from "../../components/atoms/PaperAtom";
import PersonsVector from "../../components/atoms/PersonsVector";
import SubtitleText from "../../components/atoms/SubtitleText";
import TitleText from "../../components/atoms/TitleText";
import LoginForm from "../../components/molecules/LoginForm";

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0% 3% 0% 3%",
        height: "100vh",
      }}
    >
      <Box>
        <TitleText color="primary.main" variant="h1">
          Seja Bem-vindo ao iCER!
        </TitleText>
        <SubtitleText color="secondary.contrastText" variant="subtitle1">
          área administrativa.
        </SubtitleText>
        <PersonsVector />
      </Box>
      <PaperAtom size="35%">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TitleText color="primary.main" variant="h1">
            Login
          </TitleText>
          <LoginForm />
        </Box>
      </PaperAtom>
    </Box>
  );
}
