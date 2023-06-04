import React, { ReactNode } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export type CButtonProps = ButtonProps & {
  children?: ReactNode;
};

const CButton: React.FC<CButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <Button {...rest} size="small">
        {children}
      </Button>
    </>
  );
};

export default CButton;
