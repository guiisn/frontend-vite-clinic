import { useNavigate } from "react-router-dom";
import { ApiService } from "../../../../config/api";

interface UserType {
  email: string;
  password: string;
}

export const requestAuth = async (data: UserType) => {
  const api = new ApiService();

  return await api.RequestData("POST", "/auth", data);
};

export const reqSuccess = (data: any) => {
  localStorage.setItem("@iCer:token", data?.token);
  localStorage.setItem("@iCer:user", JSON.stringify(data?.user));
};
