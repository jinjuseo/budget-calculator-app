import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
const List = React.memo(
  ({ item, setIsEditing, setEditedPayment, onClickRemoveBtn }) => {
    const onClickEditButton = () => {
      setIsEditing(true);
      setEditedPayment(item);
    };
    return (
      <div
        id={item.id}
        className="flex items-center gap-x-8 p-6 w-full h-10 border-2 border-gray-200 list"
      >
        <span className="w-1/3 ">{item.name}</span>
        <span className="w-1/3 text-center">{item.cost}</span>
        <span className="flex justify-end gap-x-4 w-1/3 ">
          <button
            onClick={onClickEditButton}
            className="text-green-600 hover:shadow"
          >
            <EditRoundedIcon />
          </button>
          <button
            onClick={() => onClickRemoveBtn(item.id)}
            className="text-red-600 hover:shadow"
          >
            <DeleteRoundedIcon />
          </button>
        </span>
      </div>
    );
  }
);

export default List;
