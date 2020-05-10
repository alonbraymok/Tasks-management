import React, { useState, useRef } from "react";
import {
  Wrapper,
  ImageWrapper,
  SignupImage,
  ContentWrapper,
  Content,
  PropWrapper,
  CreateAccount,
  InputWrapper,
  ProfileAvatar,
  ProfileImage,
} from "./signup.styled";
import { createUser, login } from "../../services/user/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions/user";
import image from "../../assets/images/sign-up.jpg";
import { CommonText, CommonInput } from "../../components/reuseable.components";
import axios from "axios";
import { uploadImageToCloudinary } from "../../util/cloudinary";

export function Signup({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const imageInputRef = useRef(null);

  function handleUserSignup() {
    const { files } = document.querySelector('input[type="file"]');
    uploadImageToCloudinary(files[0])
      .then((res) => res.json())
      .then((res) => {
        const newUser = {
          name,
          email,
          password,
          imageUrl: res.secure_url,
        };
        createUser(newUser);
      })
      .catch((err) => console.log(err));
  }
  function handleOnChangeInput() {
    imageInputRef.current.click();
  }

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
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
          <PropWrapper style={{ display: "flex", justifyContent: "center" }}>
            {imageUrl ? (
              <ProfileImage id="target" src={imageUrl} />
            ) : (
              <ProfileAvatar onClick={handleOnChangeInput}>
                <CommonText value={"Image upload"} color={"#9e9ea7"} />
              </ProfileAvatar>
            )}
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
            <CreateAccount onClick={handleUserSignup}>
              <CommonText
                size={"20px"}
                value={"Create Account"}
                color={"#fff"}
              />
            </CreateAccount>
          </PropWrapper>
        </Content>
        <input
          type="file"
          ref={imageInputRef}
          onChange={onImageChange}
          style={{ opacity: 0 }}
        />
      </ContentWrapper>
    </Wrapper>
  );
}
