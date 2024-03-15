const jwt = require("jsonwebtoken");

const setCookies = ({ userdata, res, message, statusCode = 200 }) => {
    const token = jwt.sign({ _id: userdata._id }, process.env.JWT)

    res.status(statusCode)
        .cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite:process.env.A==="devlopment"?'lax': 'none',
            secure:process.env.A==="devlopment"?false: true
        })
        .json({
            success: true,
            message
        });
}

module.exports = setCookies