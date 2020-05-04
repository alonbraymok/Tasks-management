import React from "react";
import { slide as Menu } from "react-burger-menu";
import add from "../../assets/icons/add.png";
import { CreateTask } from "../../pages/create.task/create.task";

export default function SideMenu() {
  return (
    <Menu
      right={"right"}
      customBurgerIcon={<img src={add} />}
      customCrossIcon={null}
      styles={styles}
    >
      <CreateTask />
    </Menu>
  );
}

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "40px",
    height: "40px",
    right: "15px",
    top: "85px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    width: "auto",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    borderTopLeftRadius: "15px",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(255, 255, 255, 0.3)",
  },
};
