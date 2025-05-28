import React from "react";
import Logo from "./Logo";
import Counter from "../common/Counter";
import { useItemsStore } from "../../stores/ItemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        totalNumbersOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
