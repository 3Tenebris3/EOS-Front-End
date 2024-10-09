import React, { useState } from "react";
import style from "../../styles/Login/Login.module.css";
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import LeftContent from "./ComponentLeft/LeftLogin/LeftContent";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    backgroundColor: theme.palette.background.default
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const [logo, setLogo] = useState('');

  return (
    <div className={`${classes.background} ${style["custom-background"]}`}>
      <div className={style["custom-main-container"]}>
        <div className={'w-50 p-2'}>
          <div className="w-100 h-100 overflow-hidden rounded">
            <img src='../../../../public/img/login.jpeg' className={"w-100 " + style["custom-img"]} alt="Company Image" />
          </div>
        </div>
        <div className={'w-50'}>
          <LeftContent />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
