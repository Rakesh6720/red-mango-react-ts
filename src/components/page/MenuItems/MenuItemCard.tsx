import React from "react";
import { menuItemModel } from "../../../interfaces";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard({ menuItem }: Props) {
  return <div>{menuItem.name}</div>;
}

export default MenuItemCard;
