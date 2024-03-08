import React from "react";
import "../App.css";

const getMessage = (type) => {
  switch (type) {
    case "create":
      return "아이템이 생성되었습니다.";
    case "edit":
      return "아이템이 수정되었습니다.";
    case "delete":
      return "아이템이 삭제되었습니다.";
    case "all delete":
      return "아이템이 전체 삭제되었습니다.";
    default:
      return "";
  }
};
const Notification = ({ type, className }) => {
  return (
    <div className={`notification ${className} ${type}`}>{`${getMessage(
      type
    )}`}</div>
  );
};

export default Notification;
