import Sidebar from "./Sidebar";
import styled from "styled-components";
import Navbar from "./Navbar";

const Main = styled.div`
  ::-webkit-scrollbar {
    width: 0px;
    opacity: 0;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 1px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function MainLayout({ children }) {
  return (
    <div className="w-full h-screen bg-gray-50 flex overflow-hidden smallTablet:flex-col">
      <Navbar />
      <Sidebar />
      <Main className="w-full max-w-full h-full overflow-y-auto py-10 px-10 smallTablet:px-5 phone:px-2">
        {children}
      </Main>
    </div>
  );
}

export default MainLayout;
