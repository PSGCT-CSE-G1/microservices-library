import React from "react";

export interface NavBarProps {
  applicationName: string;
}

const NavBar = (props: NavBarProps) => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <nav className="font-lato flex items-center w-screen overflow-x-hidden sticky h-20 py-2 px-4 bg-white border-b-[5px] border-[#d7d7d7]">
        <div className="h-full flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png"
            alt=""
            className="h-full w-auto p-1"
          />
          <div className="flex flex-col items-start justify-center ml-4">
            <p className="text-xs font-medium">PSG College of Technology</p>
            <p className="text-lg font-bold">{props.applicationName}</p>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex h-full items-center justify-center p-[14px] space-x-4">
          <button className="h-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/168/168214.png"
              alt=""
              className="h-full w-auto opacity-50 p-1"
            />
          </button>
          <button className="h-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
              className="h-full w-auto"
            />
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
