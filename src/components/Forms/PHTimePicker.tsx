import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ITimePicker {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const PHTimePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: ITimePicker) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toISOString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              {...field}
              label={label}
              value={value || Date.now()}
              onChange={(time) => onChange(time)}
              timezone="system"
              slotProps={{
                textField: {
                  required: required,
                  fullWidth: fullWidth,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: "outlined",
                  error: isError,
                  helperText: isError
                    ? (formState.errors[name]?.message as string)
                    : "",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHTimePicker;
