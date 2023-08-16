import cookie from 'cookie'
const handler = (req, res) => {
    if (req.method === 'POST') {
        if (req.body.userName !== process.env.ADMIN_USERNAME || req.body.password != process.env.ADMIN_PASSWORD) {
            return res.status(400).json("Wrong username or password")
        }
        res.setHeader("Set-Cookie", cookie.serialize("token", String(process.env.SECRET_KEY), {
            httpOnly:true,
            secure:true,
            // sameSite: "none",
            maxAge: 60 * 60,
            path: '/'
        }))
        res.status(200).json("Successfull");
    }
}
export default handler
