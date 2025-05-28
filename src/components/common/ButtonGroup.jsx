import React from "react";
import Button from "./Button";
import { useItemsStore } from "../../stores/ItemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetInital = useItemsStore((state) => state.resetInital);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: " Reset to initial",
      onClick: resetInital,
    },
    {
      text: "Remove all",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => {
        return (
          <Button
            key={text + onClick.toString()}
            onClick={onClick}
            buttonType="secondary"
          >
            {text}
          </Button>
        );
      })}
    </section>
  );
}
