import { TextField } from "@mui/material";

interface InputActionProps {
  label: string;
  variant: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  size?: "100%" | "50%" | "75%" | "35%" | "25%";
  type?: "password" | "email" | "text";
  required?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (event: any) => void;
}

export default function InputAction({
  label,
  variant,
  fullWidth,
  size,
  type,
  required,
  disabled,
  name,
  onChange,
}: InputActionProps) {
  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      required={required}
      disabled={disabled}
      name={name}
      onChange={onChange}
      sx={{ width: size }}
    />
  );
}
