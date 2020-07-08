import React from "react";

// components
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

// js render css
import { AuthPageContainer } from "./styles";

const AuthPage = () => {
  return (
    <AuthPageContainer>
      <LoginForm />
      <SignupForm />
    </AuthPageContainer>
  );
};

export default AuthPage;
