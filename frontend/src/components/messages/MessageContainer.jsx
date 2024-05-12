import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(selectedConversation?._id);

    useEffect(() => {
        // cleanup function (unmounts)
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className='message-container lg:md:min-w-[600px] md:min-w-[500px] lg:w-fit md:w-fit lg:h-[600px] md:h-[600px] h-screen flex flex-col relative'>
            {
                !selectedConversation ? (
                    <NoChatSelected />
                ) : (
                    <div>
                        {/* Header */}
                        <div className='w-full flex justify-start items-center gap-2 p-2 bg-slate-500'>
                            <div className={`avatar ${isOnline ? "online" : ""}`}>
                                <div className="w-10 rounded-full">
                                    <img src={selectedConversation?.profilePic} alt="user avatar" />
                                </div>
                            </div>
                            <span className='text-gray-950 font-bold'>{selectedConversation?.fullName}</span>
                        </div>

                        <Messages />
                        <MessageInput />
                    </div>
                )
            }
        </div>
    );
};
export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser?.fullName} ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='lg:text-3xl md:text-6xl text-6xl text-center' />
            </div>
        </div>
    );
};