import User from "../model/UserModel.js";

async function createUser({ name, email }) {
    return new Promise(async (resolve, reject) => {
        const user = await User.create({
            name: name,
            email: email
        })
        if (user) {
            const response = {
                data: user,
                message: "User Created Successfully!"
            }
            resolve(response)
        } else {
            const response = {
                message: "User Can't Created!"
            }
            reject(response)
        }
    })
}

async function findUser(email) {
    return new Promise(async (resolve, reject) => {
        const user = await User.findOne({ email })
        let response
        if (user) {
            response = {
                success: true,
                message: "User Found!",
                data: user
            }
        }else {
            response = {
                success: false,
                message: "User Not Found!"
            }
        }
        resolve(response)
    })
}

export default {
    createUser,
    findUser
}