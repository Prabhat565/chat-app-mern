import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const logedInUser = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: logedInUser } }).select("-password")

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log("Error in getUserForSidebar controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}