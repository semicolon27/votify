import React, { ReactNode } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export type CTextFieldProps = TextFieldProps & {
  label: string;
  children?: ReactNode;
};

const CTextField: React.FC<CTextFieldProps> = ({
  label,
  children,
  ...rest
}) => {
  return (
    <div>
      <Typography style={{ fontWeight: 600 }} variant="caption">
        {label}
      </Typography>
      <TextField size="small" margin="dense" {...rest}>
        {children}
      </TextField>
    </div>
  );
};

export default CTextField;
