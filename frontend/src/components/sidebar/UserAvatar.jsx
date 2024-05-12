import { useAuthContext } from "../../context/AuthContext"

const UserAvatar = () => {
    const { authUser } = useAuthContext();

    return (
        <div className="avatar">
            <div className="w-12 h-12 rounded-full ring-offset-base-100 ring-offset-2">
                <img src={authUser.profilePic} />
            </div>
        </div>
    )
}

export default UserAvatar
