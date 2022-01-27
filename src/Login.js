import React from "react";
import ReCaptchaComponent from "./Recaptcha";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function Login() {
  return (
    <div>
      Here we have some login options
      <div>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.RECATCHA_KEY}>
          <ReCaptchaComponent />
        </GoogleReCaptchaProvider>
      </div>
    </div>
  );
}

export default Login;
