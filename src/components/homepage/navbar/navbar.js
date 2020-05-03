import React from "react";
import { NavBarWrapper, ButtonWrapper } from "./navbar.styled";

export default function Navbar({ user, push }) {
  function redirectTo(path) {
    push(`/${path}`);
  }

  return (
    <NavBarWrapper>
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
