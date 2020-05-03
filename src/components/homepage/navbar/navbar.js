import React from "react";
import { NavBarWrapper, ButtonWrapper } from "./navbar.styled";
import { test } from "../../../services/user/user";

export default function Navbar({ user, push }) {
  function redirectTo(path) {
    push(`/${path}`);
  }

  return (
    <NavBarWrapper>
      <ButtonWrapper onClick={() => test()}>{"Test"}</ButtonWrapper>
      <ButtonWrapper onClick={() => redirectTo("create")}>
        {"Tasks"}
      </ButtonWrapper>
      <ButtonWrapper>{user && `hello: ${user.name}`}</ButtonWrapper>
      <ButtonWrapper onClick={() => redirectTo("auth")}>
        {"Login / signup"}
      </ButtonWrapper>
    </NavBarWrapper>
  );
}
