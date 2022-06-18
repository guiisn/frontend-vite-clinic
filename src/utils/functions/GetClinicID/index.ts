export const getClinicID = () => {
  const user = localStorage.getItem("@iCer:user") as any;
  const userJson = JSON.parse(user);

  return userJson.clinic_id;
};
