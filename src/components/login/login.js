import React, { useState } from "react";
import { LoginWrapper, LoginInput, LoginButton } from "./login.styled";
import { CommonText } from "../reuseable.components/text/text";
import { useDispatch } from "react-redux";
import { login } from "../../services/user/user";
import { setUser } from "../../store/actions/user";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  async function handleUserLogin() {
    const userDetails = {
      email,
      password,
    };
    const user = await login(userDetails);
    dispatch(setUser(user));
  }

  return (
    <LoginWrapper>
      <LoginInput
        placeholder={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        placeholder={"Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleUserLogin}>
        <CommonText value={"Login"} />
      </LoginButton>
    </LoginWrapper>
  );
}
