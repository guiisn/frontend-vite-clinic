import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SelectActionProps {
  data: object[];
  label: string;
  handleChange: (event: SelectChangeEvent) => void;
  value?: string;
  name?: string;
}

export default function SelectAction({
  data,
  label,
  handleChange,
  value,
  name,
}: SelectActionProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          name={name}
        >
          {data &&
            data.map((item: any, index: number) => {
              return (
                <MenuItem value={item.id} key={index}>
                  {item.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
}
