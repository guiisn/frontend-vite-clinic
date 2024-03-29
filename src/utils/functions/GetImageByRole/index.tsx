const clinic = "http://aspomires.com.br/app/images/Healthcare-Clinic-icon.png";

const healthSecretary = "https://portoreal.rj.gov.br//arquivos/images/sms.png";

export const getImageByOption = (path: string) => {
  const pathSplited = path.split("/")[2];

  switch (pathSplited) {
    case "clinics":
      return clinic;
    case "health-secretaries":
      return healthSecretary;
    case "clinic-adms":
      return healthSecretary;
    case "therapists":
      return healthSecretary;
    case "procedures":
      return healthSecretary;
    case "patients":
      return healthSecretary;
    case "coordinators":
      return healthSecretary;
    case "administrative-secretaries":
      return healthSecretary;
  }
};
