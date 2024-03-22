import React from "react";
import confirmImg from "../../assets/confirm-icon.png";

const StatusOrder: React.FC = () => {
  return (
    <div className="mb-6 flex flex-col items-center justify-center">
      <img className="w-24" src={confirmImg} alt="" />
      <h1 className="text-3xl">Order Success</h1>
      <p className="text-center text-gray-500">
        Your order has been successfully placed
      </p>
    </div>
  );
};

export default StatusOrder;
