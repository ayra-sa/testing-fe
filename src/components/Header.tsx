import React from "react";
import BackIcon from "../assets/icons/icon-left.svg";
import BoxIcon from "../assets/icons/icon-box.svg";

// type Props = {}

const Header = () => {
  return (
    <header className="py-8 px-5">
      <nav>
        <div className="container">
          <div className="flex items-center">
            <button className="flex items-center gap-x-2 text-lg font-semibold tracking-wider">
              <img src={BackIcon} alt="icon back" />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-x-2 mx-auto">
              <img src={BoxIcon} alt="icon box" />
              <h1 className="font-medium text-2xl -tracking-[0.48px] text-[#FCFCFC]">
                Product list
              </h1>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
