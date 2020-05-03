import React, { useState } from "react";
import { Wrapper, InputWrapper, ButtonsWrapper } from "./auth.styled";
import {
  CommonInput,
  CommonButton,
} from "../../components/reuseable.components";
import { createUser, login } from "../../services/user/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions/user";

export function AuthPage({ history }) {
  const [name, setName] = useState("");
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
    history.push("/");
  }

  function handleUserSignup() {
    const newUser = {
      name,
      email,
      password,
    };
    createUser(newUser);
  }

  return (
    <Wrapper>
      <InputWrapper>
        <CommonInput
          placeholder={"Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <CommonInput
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <CommonInput
          placeholder={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <ButtonsWrapper>
        <CommonButton title={"Sing up"} onClick={handleUserSignup} />
        <CommonButton title={"Login"} onClick={handleUserLogin} />
      </ButtonsWrapper>
    </Wrapper>
  );
}
