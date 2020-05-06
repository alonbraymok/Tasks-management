import React, { useState } from "react";
import {
  Wrapper,
  ImageWrapper,
  SignupImage,
  ContentWrapper,
  Content,
  PropWrapper,
  CreateAccount,
  InputWrapper,
} from "./signup.styled";
import { createUser, login } from "../../services/user/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions/user";
import image from "../../assets/images/sign-up.jpg";
import { CommonText, CommonInput } from "../../components/reuseable.components";

export function Signup({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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
      <ImageWrapper>
        <SignupImage src={image} />
      </ImageWrapper>
      <ContentWrapper>
        <Content>
          <PropWrapper>
            <CommonText size={"25px"} value={"Sign up to Task management"} />
          </PropWrapper>
          <PropWrapper>
            <CommonText size={"20px"} value={"Name"} />
            <InputWrapper>
              <CommonInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ color: "#000" }}
              />
            </InputWrapper>
          </PropWrapper>
          <PropWrapper>
            <CommonText size={"20px"} value={"Email"} />
            <InputWrapper>
              <CommonInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ color: "#000" }}
              />
            </InputWrapper>
          </PropWrapper>
          <PropWrapper>
            <CommonText size={"20px"} value={"Password"} />
            <InputWrapper>
              <CommonInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ color: "#000" }}
              />
            </InputWrapper>
          </PropWrapper>
          <PropWrapper>
            <CreateAccount>
              <CommonText
                size={"20px"}
                value={"Create Account"}
                color={"#fff"}
              />
            </CreateAccount>
          </PropWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
}
