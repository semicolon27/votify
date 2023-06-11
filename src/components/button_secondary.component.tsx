import React, { ReactNode } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export type CButtonProps = ButtonProps & {
  children?: ReactNode;
};

const CButtonSecondary: React.FC<CButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <Button
        {...rest}
        className="secondary-button semibold"
        variant="contained"
        size="small"
      >
        {children}
      </Button>
    </>
  );
};

export default CButtonSecondary;
