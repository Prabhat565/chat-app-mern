import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversation();

	const handleSubmit = (e) => {
        e.preventDefault();

		if(!search) return;

		// if(search.length < 3) {
		// 	toast.error("Search term must be at least 3 characters long")
		// 	return;
		// }
        
		const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()))

		if(conversation) {
			setSelectedConversation(conversation)
			setSearch("")
		} else {
			toast.error("No such user found!")
		}

	}

	return (
		<form className="flex items-center gap-2 justify-between" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search…"
				className="input lg:input-md md:input-md input-sm input-bordered rounded-full w-5/6"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type="submit"
				className="btn lg:btn-md md:btn-md btn-sm btn-circle bg-sky-500 hover:bg-sky-600 text-white"
			>
				<IoSearchSharp className="lg:w-6 md:w-6 w-4 lg:h-6 md:h-6 h-4 outline-none" />
			</button>
		</form>
	);
};

export default SearchInput;
