import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversation();

	return (
		<div className='lg:py-2 md:py-2 p-0 mb-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}
			
			{loading ? (
				<div className="w-full h-full flex justify-center items-center">
					<span className="loading loading-spinner"></span>
				</div>
			) : null}
		</div>
	);
};
export default Conversations;