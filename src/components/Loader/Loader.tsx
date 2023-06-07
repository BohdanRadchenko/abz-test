import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import "./loader.scss";

export const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress sx={{ color: "#00BDD3" }}/>
    </div>
  );
};
