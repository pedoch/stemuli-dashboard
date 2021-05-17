import styled from "styled-components";
import { useRouter } from "next/router";
import { Button } from "antd";

const SidebarCont = styled.div`
  min-width: 256px;
`;

const Menu = styled.div`
  width: 256px;

  ::-webkit-scrollbar {
    width: 1px;
    opacity: 0;
  }
`;

export default function Sidebar() {
  const router = useRouter();
  return (
    <SidebarCont
      className="h-screen shadow relative bg-white"
      // style={{ width: "256px" }}
    >
      <div className="flex w-full py-10 px-6 absolute bg-white">
        <img src="/images/icons/logo.svg" />
        <p className="text-3xl font-bold -mt-1">Unity</p>
        <span
          style={{ height: "6px", width: "6px" }}
          className="mt-auto mb-4 ml-1 bg-primary"
        ></span>
      </div>
      <Menu className="pt-32 px-4 pb-4 h-screen overflow-y-auto">
        <div className="text-gray-500">
          <p className="mb-3 ml-4 text-xs">Admin tools</p>
          <ul>
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
                <Links link={link} />
              </li>
            ))}
          </ul>
        </div>
        <hr className="w-full bg-gray-500 my-10" />
        <div className="text-gray-500">
          <p className="mb-3 ml-4 text-xs">Insights</p>
          <ul>
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
                className={`mb-3 rounded-xl hover:bg-purple-200 hover:text-gray-500 font-semibold text-sm flex items-center ${
                  router.asPath === link.link && "bg-primary text-white"
                }`}
              >
                <Links link={link} />{" "}
                <span className="bg-notification px-2 py-1 mr-4 text-xs rounded-full text-white">
                  {link.number}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
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
          <img src="/images/avatar.png" className="mr-3 w-12 h-auto" />
          <div>
            <p className="font-semibold">Tam Tran</p>
            <p className="text-gray-500">Free account</p>
          </div>
          <img src="/images/icons/expand.svg" className="ml-5" />
        </div>
      </Menu>
    </SidebarCont>
  );
}

function Links({ link }) {
  const router = useRouter();
  return (
    <a
      className={`w-full flex p-4 ${
        router.asPath === link.link && "text-white"
      } hover:text-gray-500`}
      href={link.link}
    >
      <img src={`/images/icons/${link.icon}.svg`} className="mr-4" />
      {link.text}
    </a>
  );
}
