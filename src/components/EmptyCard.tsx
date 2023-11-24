import React from "react";
import PlusIcon from "../assets/icons/icon-plus.svg";

type Props = {
  handleOpenClick: () => void;
};

const EmptyCard = ({ handleOpenClick }: Props) => {
  return (
    <div className="min-w-[228px] min-h-[206px] bg-[#1E1E1E] border-2 border-dashed border-[rgb(49,49,49)] rounded-xl p-4 text-base font-medium tracking-[0.04px] inline-flex flex-col place-content-center items-center gap-y-3">
      <button onClick={handleOpenClick}>
        <img src={PlusIcon} alt="icon plus" />
      </button>
      <p>Add New Product</p>
    </div>
  );
};

export default EmptyCard;
