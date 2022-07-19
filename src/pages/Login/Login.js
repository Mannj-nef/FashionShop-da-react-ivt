import React, { useState } from "react";
import "./style.scss";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import FormSingUp from "./SignUp";
import { useSelector } from "react-redux";
import FormSignIng from "./SignIn";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const headerHeight = useSelector((state) => state.headerReducer.height);

  return (
    <div className="login" style={{ marginTop: headerHeight }}>
      <div className="login-conten flex">
        <div className="flex-1 flex items-center ">
          <div className="flex-1 p-10 ">
            {/* Sing in */}
            <div className="form-login">
              <FormSignIng></FormSignIng>
              <button className="btn-submit flex items-center gap-3 justify-center btn-sing-in__gogogle">
                <div className="w-[20px] h-[20px]">
                  <img
                    className="w-full h-full object-cover"
                    src="/icons-google.png"
                    alt=""
                  />
                </div>
                <span>Sing in width Google</span>
              </button>
              <p className="check-account">
                Dont' have an account?
                <span
                  className="confirm-account"
                  onClick={() => setIsRegister(true)}
                >
                  Sing up for free
                </span>
              </p>
            </div>
          </div>
          {/* sing up */}
          <div className="flex-1 p-10 ">
            <div className="form-login">
              <FormSingUp></FormSingUp>
              <p className="check-account">
                Do you already have the password ?
                <span
                  className="confirm-account"
                  onClick={() => setIsRegister(false)}
                >
                  Back to login
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={`wrappper-img ${isRegister ? "left-0" : "left-1/2"}`}>
          <div className="mt-auto p-5 content-img">
            <h2 className="title">
              'We've been using untitled to kick start every new project and
              can't imagine working without it.'
            </h2>
            <h3 className="author">Mquan</h3>
            <div className=" flex justify-between">
              <div className="info">
                <p className="founder">Founder NikaShop</p>
                <p className="desgin-by">Web Desgign MQDEV</p>
              </div>
              <div className=" flex gap-5">
                <button className="btn-icon">
                  <BsArrowLeft className="icon"></BsArrowLeft>
                </button>
                <button className="btn-icon">
                  <BsArrowRight className="icon"></BsArrowRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
