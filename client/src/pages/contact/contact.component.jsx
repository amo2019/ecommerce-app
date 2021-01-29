import React from "react";
import { contactPage } from "./contact.styles";
const ContactPage = () => {
  return (
    <contactPage>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "green",
          textShadow: "2px 2px 4px #000000",
        }}
      >
        <h1>This Page still under construction...</h1>
      </div>
    </contactPage>
  );
};

export default ContactPage;
