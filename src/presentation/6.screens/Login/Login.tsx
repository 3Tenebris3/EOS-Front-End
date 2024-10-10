import React, { useState } from "react";
import style from "../../styles/Login/Login.module.css";
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import LeftContent from "./ComponentLeft/LeftLogin/LeftContent";
import RecoverPassword from "./recoverPassword";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const [logo, setLogo] = useState('');
  const [isRecovering, setIsRecovering] = useState(false);

  return (
    <div className={`${classes.background} ${style["custom-background"]}`}>
      <div className={style["custom-main-container"]}>
        <div className={'w-50 p-4'}>
          <div className="w-100 h-100 position-relative overflow-hidden rounded">
            <img src='/img/login.jpeg' className={"w-100 " + style["custom-img"]} alt="Company Image" />
          </div>
        </div>
        <div className={'w-50'}>
        {!isRecovering ? (
            <LeftContent onRecoverPassword={() => setIsRecovering(true)} /> 
          ) : (
            <RecoverPassword onCancel={() => setIsRecovering(false)} /> 
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
