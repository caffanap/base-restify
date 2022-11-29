import UserRepository from "../repository/UserRepository.js";

async function loginRegister(req, res, next) {
    const { email } = req.body

    await UserRepository.findUser(email).then(async (data) => {
        if (data.success) {
            res.send(200, {
                data: data.data,
                message: "Successfully Logged In!"
            })
        } else {
            await UserRepository.findUser(email).then(async (data) => {
                if (data.data) {
                    res.send(400, {
                        message: "Email has already taken!"
                    })
                } else {
                    await UserRepository.createUser(req.body).then((response) => {
                        res.send(201, {
                            data: response.data,
                            message: response.message
                        })
                    })
                }
            })
        }
    })
    next()
}


export default {
    loginRegister
}