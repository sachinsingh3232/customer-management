import dbConnect from "../../../utils/database";
import User from "../../../Models/userModel";

const handler = async (req, res) => {
    const {
        method,
        query: { id },
        // cookies
    } = req;
    // const token = cookies.access_token;
    // if (!token) return res.status(401).json("Not Authenticated!");
    await dbConnect();
    if (method === "PUT") {
        try {
            const user = await User.findByIdAndUpdate(id, {
                name: req.body.name,
                email: req.body.email.toLowerCase(),
                phoneNumber: req.body.phoneNumber
            }, {
                new: true,
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json('User Already Exist');
        }
    }
    if (method === "DELETE") {
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json('Deleted !');
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

export default handler;