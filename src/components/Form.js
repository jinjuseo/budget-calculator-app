import React, { useState, useEffect } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Form = ({ setPayments, editedPayment, isEditing, showNotification }) => {
  const [payment, setPayment] = useState({
    name: "",
    cost: "",
    id: "",
  });
  useEffect(() => {
    isEditing && setPayment(editedPayment);
  }, [editedPayment, isEditing]);
  const onSubmit = (e) => {
    e.preventDefault();
    setPayments((prev) => [...prev, { ...payment, id: Date.now() }]);
    setPayment({ name: "", cost: "", id: "" });
    showNotification("create");
  };
  const onSubmitEdit = (e) => {
    e.preventDefault();
    setPayments((prev) => prev.filter((item) => item.id !== payment.id));
    setPayments((prev) => [...prev, { ...payment }]);
    showNotification("edit");
    setPayment({ name: "", cost: "", id: "" });
  };
  const onChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };
  return (
    <form
      className="flex flex-col gap-y-6 w-full items-start justify-start"
      onSubmit={isEditing ? onSubmitEdit : onSubmit}
    >
      <section className="flex gap-x-8 w-full items-center">
        <label className="w-1/2 text-amber-500 ">
          지출 항목
          <br />
          <input
            onChange={onChange}
            value={payment.name}
            name="name"
            type="text"
            className="mt-2 w-full h-8 border-b-2 border-b-teal-400 text-black outline-none py-4"
            placeholder="예) 렌트비"
          />
        </label>
        <label className="w-1/2 text-amber-500 ">
          비용
          <br />
          <input
            onChange={onChange}
            value={payment.cost}
            name="cost"
            type="number"
            className="mt-2 w-full h-8 border-b-2 border-b-teal-400 text-black outline-none py-4"
            placeholder="예) 100"
          />
        </label>
      </section>
      <button
        type="submit"
        className="px-4 py-1.5 text-base bg-teal-400 text-white rounded-sm cursor hover:bg-teal-300 shadow"
      >
        <span className=" align-middle mr-2">
          {isEditing ? "수정" : "제출"}
        </span>
        <SendRoundedIcon className="align-middle" />
      </button>
    </form>
  );
};

export default Form;
