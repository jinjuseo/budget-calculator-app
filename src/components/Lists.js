import { List } from "./";
import React from "react";

const Lists = React.memo(
  ({ items, setIsEditing, setEditedPayment, onClickRemoveBtn }) => {
    return (
      <section className="flex flex-col justify-start items-center gap-y-4 w-full h-full">
        {items &&
          items.map((item) => {
            return (
              <List
                key={item.id}
                item={item}
                setIsEditing={setIsEditing}
                setEditedPayment={setEditedPayment}
                onClickRemoveBtn={onClickRemoveBtn}
              />
            );
          })}
      </section>
    );
  }
);

export default Lists;
