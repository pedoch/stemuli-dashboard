import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Button } from "antd";

const SidebarCont = styled.div`
  min-width: 256px;

  @media only screen and (max-width: 800px) {
    min-width: 0px;
  }
`;

const Menu = styled.div`
  width: 100%;

  ::-webkit-scrollbar {
    width: 1px;
    opacity: 0;
  }
`;

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <SidebarCont
      className="h-screen shadow relative bg-white smallTablet:hidden"
      showMenu={showMenu}
    >
      {/*
        Static top part of the side bar (with site title and logo)
      */}
      <Button
        className="p-2 ml-3 hidden tablet:block"
        type="link"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src="/images/icons/burger.svg" />
      </Button>
      <hr className="hidden tablet:block" />
      <div className="flex w-full py-10 px-6 absolute bg-white">
        <img src="/images/icons/logo.svg" />
        <p
          className={`text-3xl font-bold -mt-1 verySmallLaptop:text-2xl tablet:${
            showMenu ? "block" : "hidden"
          }`}
        >
          Unity
        </p>
        <span
          style={{ height: "6px", width: "6px" }}
          className={`mt-auto mb-4 ml-1 bg-primary tablet:${
            showMenu ? "block" : "hidden"
          }`}
        ></span>
        <Button
          className="p-2 ml-3 hidden verySmallLaptop:block tablet:hidden"
          type="link"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src="/images/icons/burger.svg" />
        </Button>
      </div>
      <Menu className="pt-32 px-4 pb-4 h-screen overflow-y-auto tablet:pb-10">
        <div className="text-gray-500">
          <p className="mb-3 ml-4 flex text-xs tablet:ml-0">
            Admin
            <span className={`tablet:${showMenu ? "block" : "hidden"}`}>
              &nbsp;tools
            </span>
          </p>
          <ul>
            {/*
              Map links in admin tools
            */}
            {[
              { link: "#", text: "Overview", icon: "graph" },
              { link: "#", text: "Products", icon: "bag" },
              { link: "#", text: "Campaigns", icon: "chart" },
              { link: "/schedules", text: "Schedules", icon: "discover" },
              { link: "#", text: "Payouts", icon: "wallet" },
              { link: "#", text: "Statements", icon: "document" },
              { link: "#", text: "Settings", icon: "settings" },
            ].map((link) => (
              <li
                key={link.text}
                className={`mb-3 rounded-xl hover:bg-purple-200 hover:text-gray-500 font-semibold text-sm ${
                  router.asPath === link.link && "bg-primary text-white"
                }`}
              >
                <Links showMenu={showMenu} link={link} />
              </li>
            ))}
          </ul>
        </div>
        <hr className="w-full bg-gray-500 my-10" />
        <div className="text-gray-500">
          <p className="mb-3 ml-4 text-xs tablet:ml-0">Insights</p>
          <ul>
            {/*
              Map links in insight
            */}
            {[
              { link: "#", text: "Inbox", icon: "message", number: 18 },
              {
                link: "#",
                text: "Notifications",
                icon: "notification",
                number: 2,
              },
              { link: "#", text: "Comments", icon: "chat", number: 20 },
            ].map((link) => (
              <li
                key={link.text}
                className={`mb-3 rounded-xl relative hover:bg-purple-200 hover:text-gray-500 font-semibold text-sm flex items-center tablet:justify-between ${
                  router.asPath === link.link && "bg-primary text-white"
                }`}
              >
                <Links showMenu={showMenu} link={link} />{" "}
                <span
                  className={`bg-notification px-2 py-1 mr-4 text-xs rounded-full text-white tablet:${
                    showMenu ? "block ml-3" : "hidden"
                  }`}
                >
                  {link.number}
                </span>
                <span
                  className={`bg-notification p-1 right-3 top-3 absolute rounded-full text-white hidden tablet:${
                    !showMenu ? "block" : "hidden"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`relative tablet:${showMenu ? "block" : "hidden"}`}>
          <div className="bg-primary-light w-11/12 p-3 right-2 rounded-xl absolute -bottom-2 opacity-50"></div>
          <div className="bg-primary-light w-full p-4 rounded-xl mt-16 z-10">
            <img src="/images/weirdball-blue.png" />
            <Button
              size="large"
              className="w-full rounded-xl bg-white text-primary font-semibold"
            >
              Get Pro Now
            </Button>
          </div>
        </div>
        <div className="flex w-full mt-10 cursor-pointer">
          <img
            src="/images/avatar.png"
            className={`mr-3 w-12 h-auto tablet:${!showMenu && "mr-0"}`}
          />
          <div className={`tablet:${showMenu ? "block" : "hidden"}`}>
            <p className="font-semibold">Tam Tran</p>
            <p className="text-gray-500">Free account</p>
          </div>
          <img
            src="/images/icons/expand.svg"
            className={`ml-5 tablet:${showMenu ? "block" : "hidden"}`}
          />
        </div>
      </Menu>
    </SidebarCont>
  );
}

function Links({ link, showMenu }) {
  const router = useRouter();
  return (
    <a
      className={`w-full flex p-4 ${
        router.asPath === link.link && "text-white"
      } hover:text-gray-500`}
      href={link.link}
    >
      <img
        src={`/images/icons/${link.icon}.svg`}
        className={`mr-4 tablet:${!showMenu && "mr-0"}`}
      />
      <span className={`tablet:${showMenu ? "block" : "hidden"}`}>
        {link.text}
      </span>
    </a>
  );
}
