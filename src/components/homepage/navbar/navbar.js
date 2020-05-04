import React from "react";
import {
  NavBarWrapper,
  ButtonWrapper,
  TitleWrapper,
  UserWrapper,
  SectionWrapper,
  ProfileImage,
} from "./navbar.styled";
import { CommonText } from "../../reuseable.components/text/text";
import nikol from "../../../assets/images/nikol.png";
import Login from "../../login/login";

export default function Navbar({ user, push }) {
  function redirectTo(path) {
    push(`/${path}`);
  }

  return (
    <NavBarWrapper>
      <SectionWrapper>
        <TitleWrapper>
          <CommonText value={"TASK MANAGEMENT"} size={"25px"} />
          <CommonText value={"for Nikol"} size={"15px"} />
        </TitleWrapper>
        <ButtonWrapper onClick={() => redirectTo("create")}>
          <CommonText value={"Tasks"} size={"20px"} />
        </ButtonWrapper>
        <ButtonWrapper onClick={() => redirectTo("auth")}>
          <CommonText value={"Sign up"} size={"20px"} />
        </ButtonWrapper>
      </SectionWrapper>
      <SectionWrapper>
        {user ? (
          <>
            <UserWrapper>
              <CommonText value={`Hello: ${user.name}`} size={"20px"} />
            </UserWrapper>
            <ProfileImage src={nikol} />
          </>
        ) : (
          <Login />
        )}
      </SectionWrapper>
    </NavBarWrapper>
  );
}