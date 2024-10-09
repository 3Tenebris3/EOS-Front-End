import React, { useState } from "react";
import style from "../../styles/Login/Login.module.css";
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    backgroundColor: theme.palette.background.paper
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const [logo, setLogo] = useState('');

  return (
    <div className={classes.background + style["custom-background"]}>
      <div className={style["custom-main-container"]}>
        <div className={'w-50 p-2'}>
          <div className="w-100 h-100 overflow-hidden rounded">
            <img src='../../../../public/img/Login.jpg' className="w-100" alt="Company Image" />
          </div>
        </div>
        <div className={'w-50'}>
          <h1>hola</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
