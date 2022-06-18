export const getFristName = () => {
  const getLocal = localStorage.getItem("@iCer:user") as any;
  const user = JSON.parse(getLocal);
  const { name } = user;

  const fristName = name.split(" ")[0];

  return fristName;
};
