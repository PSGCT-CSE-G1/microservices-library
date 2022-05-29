import React from "react";

export interface NavBarProps {
  applicationName: string;
  className: string;
}

const NavBar = (props: NavBarProps) => {

  const links = [
    {
      name: "Student Information",
      logo: "https://cdn-icons-png.flaticon.com/512/3750/3750011.png",
    },
    {
      name: "Faculty Information",
      logo: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
    {
      name: "Document Maintenance",
      logo: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
    },
    {
      name: "Research Information",
      logo: "https://cdn-icons-png.flaticon.com/512/3207/3207604.png",
    },
    {
      name: "Timetable Management",
      logo: "https://cdn-icons-png.flaticon.com/512/3652/3652267.png",
    },
    {
      name: "Hostel Information",
      logo: "https://cdn-icons-png.flaticon.com/512/1398/1398566.png",
    },
    {
      name: "PADCO / PASCO",
      logo: "https://cdn-icons-png.flaticon.com/512/2328/2328966.png",
    },
    {
      name: "CSEA Management",
      logo: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
    },
    {
      name: "Student Projects",
      logo: "https://cdn-icons-png.flaticon.com/512/2823/2823444.png",
    },
    {
      name: "iConnect AIR Lab",
      logo: "https://cdn-icons-png.flaticon.com/512/653/653831.png",
    },
    {
      name: "Alumni Informaion",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
    },
    {
      name: "Library Management",
      logo: "https://cdn-icons-png.flaticon.com/512/1233/1233814.png",
    },
  ];  

  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <nav className={`${props.className} font-lato  fixed top-0 left-0 right-0  `}>
        <div className="h-20 flex items-center w-screen overflow-x-hidden py-2 px-4 bg-white border-b-[5px] border-[#d7d7d7]">
          <div className="h-full flex items-center ">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png"
              alt=""
              className="h-full w-auto p-1"
            />
            <div className="flex flex-col items-start justify-center ml-4">
              <p className="text-xs font-medium">PSG College of Technology</p>
              <p className="text-lg font-bold">{applicationName}</p>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex h-full items-center justify-center p-[12px] space-x-4">
            <button className="h-full group">
              <img
                src="https://cdn-icons-png.flaticon.com/512/168/168214.png"
                alt=""
                className="h-full w-auto opacity-50 p-1"
              />
              <div className="hidden group-hover:block absolute top-12 right-[48px]">
                <div className="h-8 bg-transparent"></div>
                <div className="bg-white py-2 px-2 rounded-lg shadow-md grid grid-cols-3">
                  {links.map((link) => {
                    return (
                      <button className="bg-white px-4 py-2 hover:bg-smoke rounded-md flex flex-col justify-center items-center">
                        <img src={link.logo} alt="" className="w-12 h-12" />
                        <p className="mt-1 w-16 text-xs">{link.name}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </button>
            <button className="h-full group">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
                className="h-full w-auto border-4 border-transparent group-hover:border-[#d7d7d7] rounded-full"
              />
              <div className="hidden group-hover:block absolute top-12 right-[10px]">
                <div className="h-8 bg-transparent"></div>
                <div className="bg-white py-2 px-2 rounded-lg shadow-md">
                  <button className="w-full px-2 py-1 transition-all rounded-md duration-75 bg-white hover:bg-smoke">
                    <p className="text-sm m-0 p-0">Profile</p>
                  </button>
                  <button className="w-full px-2 py-1 transition-all rounded-md duration-75 bg-white hover:bg-smoke">
                    <p className="text-sm m-0 p-0">Logout</p>
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
