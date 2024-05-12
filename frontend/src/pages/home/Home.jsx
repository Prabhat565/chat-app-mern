import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import { TiMessages } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const [checked, setChecked] = useState(false);
  const { selectedConversation } = useConversation();

  useEffect(() => {
    return () => setChecked(false);
  }, [selectedConversation?._id]);

  return (
    <div className="home flex lg:h-[600px] md:h-[600px] h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 relative">
      <div className="open-sidebar-btn" onClick={() => setChecked(true)}>
        <TiMessages className="text-2xl absolute top-4 right-4 z-50 cursor-pointer" />
      </div>

      <div className={`links-container ${checked ? "right-0" : "right--300"}`}>
        <div className="flex items-center justify-between w-full sidebar-head overflow-hidden">
          <div className="close-sidebar-btn" onClick={() => setChecked(false)}>
            <IoCloseSharp className="text-xl cursor-pointer" />
          </div>
        </div>

        <Sidebar />
      </div>
      <MessageContainer />
    </div>
  );
};

export default Home;
