import { useState } from "react";
import { useRouter } from "next/router";
import Notifications from "./Notifications";
import { Button, Drawer } from "antd";
import styled from "styled-components";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <div className="w-full px-3 py-4 justify-between hidden bg-white smallTablet:flex">
      <Button
        className="p-2 ml-3 hidden tablet:block"
        type="link"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src="/images/icons/burger.svg" />
      </Button>
      <Button
        className="border-none bg-none rounded-full px-px"
        style={{ backgroundImage: "none" }}
      >
        <img src="/images/icons/search.svg" className="mr-2" />
      </Button>
      <Notifications />
      <img
        src="/images/avatar.png"
        // className={`mr-3 w-12 h-auto tablet:${!showMenu && "mr-0"}`}
      />
      <Drawer
        placement="left"
        closable={true}
        onClose={() => setShowMenu(false)}
        visible={showMenu}
      >
        <Menu className="pt-5 pb-4 h-screen overflow-y-auto tablet:pb-10">
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
                    className={`bg-notification p-1 right-3 top-3 absolute rounded-full text-white tablet:${
                      !showMenu ? "block" : "hidden"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </Menu>
      </Drawer>
    </div>
  );
}

const Menu = styled.div`
  width: 100%;

  ::-webkit-scrollbar {
    width: 1px;
    opacity: 0;
  }
`;

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
