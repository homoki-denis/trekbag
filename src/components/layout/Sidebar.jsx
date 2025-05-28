import React from "react";
import AddItemForm from "../features/AddItemForm";
import ButtonGroup from "../common/ButtonGroup";
import { useItemsStore } from "../../stores/ItemsStore";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
