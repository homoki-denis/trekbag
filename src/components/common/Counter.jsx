import React from "react";

export default function Counter({ totalNumbersOfItems, numberOfItemsPacked }) {
  return (
    <div>
      <b>{numberOfItemsPacked}</b> / {totalNumbersOfItems} items packed
    </div>
  );
}
