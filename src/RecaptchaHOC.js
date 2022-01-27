import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ReactDom from "react-dom";
ReactDom.render(
  <GoogleReCaptchaProvider
    reCaptchaKey="[Your recaptcha key]"
    language="[optional_language]"
    useRecaptchaNet="[optional_boolean_value]"
    useEnterprise="[optional_boolean_value]"
    scriptProps={{
      async: false, // optional, default to false,
      defer: false, // optional, default to false
      appendTo: "head", // optional, default to "head", can be "head" or "body",
      nonce: undefined, // optional, default undefined
    }}
  ></GoogleReCaptchaProvider>,
  document.getElementById("app")
);
