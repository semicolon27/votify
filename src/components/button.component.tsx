import React, { ReactNode } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

export type CButtonProps = ButtonProps & {
  children?: ReactNode;
};

const CButton: React.FC<CButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <LoadingButton {...rest} size="small">
        {children}
      </LoadingButton>
    </>
  );
};

export default CButton;
