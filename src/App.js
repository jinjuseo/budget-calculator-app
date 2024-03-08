import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import { Form, Lists, Notification } from "./components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
const App = () => {
  const [totalCosts, setTotalCosts] = useState(0);
  const [payments, setPayments] = useState([]);
  const [notification, setNotification] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedPayment, setEditedPayment] = useState({});

  const getTotalCosts = useCallback(() => {
    const totalCosts =
      payments &&
      payments.reduce((acc, curr) => {
        return acc + Number(curr.cost);
      }, 0);
    return totalCosts && totalCosts.toLocaleString();
  }, [payments]);

  useEffect(() => {
    console.log(payments);
    setTotalCosts(getTotalCosts());
    setIsEditing(false);
  }, [payments]);

  const showNotification = useCallback((type) => {
    //create, delete, edit,all delete
    setNotification(type);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  }, []);
  const onClickAllRemove = useCallback(() => {
    setPayments([]);
    showNotification("all delete");
  }, []);

  const onClickRemoveBtn = (id) => {
    let newPayments = payments.filter((payment) => payment.id !== id);
    setPayments(newPayments);
    showNotification("delete");
  };
  return (
    <div className="flex flex-col gap-y-8 items-center justify-start w-screen   h-screen max-w-screen-2xl p-12 m-auto">
      <div className="flex justify-between w-full">
        <h1 className="w-4/5 h-full text-3xl font-bold">예산 계산기</h1>
        <Notification
          className="flex w-1/5 h-full justify-center items-center"
          type={notification}
        />
      </div>
      <main className="flex flex-col flex-start px-8 py-8 gap-y-8 w-full h-auto bg-white">
        <Form
          setPayments={setPayments}
          setNotification={setNotification}
          showNotification={showNotification}
          isEditing={isEditing}
          editedPayment={editedPayment}
        />
        <Lists
          items={payments}
          setIsEditing={setIsEditing}
          setEditedPayment={setEditedPayment}
          onClickRemoveBtn={onClickRemoveBtn}
        />
        <button
          onClick={onClickAllRemove}
          type="button"
          className="w-36 px-4 py-1.5 text-base bg-teal-400 text-white rounded-sm cursor hover:bg-teal-300 shadow"
        >
          <span className=" align-middle mr-2">목록 지우기</span>
          <DeleteRoundedIcon className="align-middle" />
        </button>
      </main>
      <h1 className="w-full text-3xl text-right">{`총지출 : ${totalCosts}₩`}</h1>
    </div>
  );
};

export default App;
