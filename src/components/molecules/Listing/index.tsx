import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardList from "../../atoms/CardList";
import Loading from "../../atoms/Loading";
import TitleText from "../../atoms/TitleText";
import { Icon } from "@iconify/react";

interface ListingProps {
  isLoading: boolean;
  data: object[];
  title: string;
  textButton: string;
  link: string;
  type:
    | "clinic"
    | "healthSecretary"
    | "clinicAdms"
    | "procedures"
    | "patients"
    | "coordinators"
    | "admSecretaries"
    | "therapists";
}

export default function Listing({
  isLoading,
  data,
  title,
  textButton,
  link,
  type,
}: ListingProps) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleText color="primary.main" variant="body1">
          {title}
        </TitleText>
        <Button
          type="button"
          variant="contained"
          onClick={() => navigate(link)}
        >
          {textButton} <Icon icon="ic:baseline-arrow-right-alt" width={30} />
        </Button>
      </Box>
      <br />
      {isLoading && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {data.map((item: any, index: number) => (
          <CardList name={item.name} id={item.id} type={type} key={index} />
        ))}
      </Box>
    </Box>
  );
}
