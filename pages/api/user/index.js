import dbConnect from "../../../utils/database";
import User from "../../../Models/userModel";
const handler = async (req, res) => {
    const { method } = req;
    // if (!token || token !== process.env.SECRET_KEY) {
    //     return res.status(401).json("Not authenticated!")
    // }

    await dbConnect(); 
    if (method === "POST") {
        try {
            let user = await User.findOne({ email: req.body.email.toLowerCase() });
            if (user) return res.status(500).json("User Already Exist");
            user = await User.create({
                name: req.body.name,
                email: req.body.email.toLowerCase(),
                phoneNumber: req.body.phoneNumber
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "GET") {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

export default handler;