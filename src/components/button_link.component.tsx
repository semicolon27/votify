import React, { ReactNode } from 'react';
import { ButtonProps } from '@mui/material/Button';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export type CButtonLinkProps = TypographyProps & {
  children?: ReactNode;
  to: string;
};

const CButtonLink: React.FC<CButtonLinkProps> = ({ children, to, ...rest }) => {
  return (
    <>
      <NavLink className="link-button" to={to}>
        <Typography
          {...rest}
          variant="caption"
          className="semibold text-primary-color"
        >
          {children}
        </Typography>
      </NavLink>
    </>
  );
};

export default CButtonLink;
