import { InputAdornment, TextField } from "@mui/material";

export const IconTextField = ({
  iconStart,
  iconEnd,
  InputProps,
  labelForInput,
  ...props
}) => {
  return (
    <>
      <label
        style={{
          fontWeight: 700,
          display: "block",
          marginBottom: "12px",
          marginTop: "16px",
        }}
      >
        {labelForInput}
      </label>
      <TextField
        {...props}
        InputProps={{
          ...InputProps,
          startAdornment: iconStart ? (
            <InputAdornment position="start">{iconStart}</InputAdornment>
          ) : null,
          endAdornment: iconEnd ? (
            <InputAdornment position="end">{iconEnd}</InputAdornment>
          ) : null,
        }}
      />
    </>
  );
};
