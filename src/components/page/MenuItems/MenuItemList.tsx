import React, { useEffect } from "react";
import { menuItemModel } from "../../../interfaces";
import MenuItemCard from "./MenuItemCard";
import { useGetMenuItemsQuery } from "../../../apis/menuItemApi";
import { useDispatch } from "react-redux";
import { setMenuItem } from "../../../storage/redux/menuItemSlice";

function MenuItemList() {
  const { data, isLoading } = useGetMenuItemsQuery(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container row">
      {data.result.length > 0 &&
        data.result.map((menuItem: menuItemModel, index: number) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
