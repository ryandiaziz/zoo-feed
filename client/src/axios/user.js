import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/api/users'

const login = async (datas, cb) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/login',
            data: datas
        })
        const access_token = result.data.access_token;
        localStorage.setItem('access_token', access_token);
        cb(true)
    } catch (err) {
        console.log(err)
    }
}

const readDataUser = async (cb) => {
    const token = localStorage.getItem('access_token');
    console.log(token);
    try {
        let result = await axios({
            method: 'GET',
            url: URL + "/account",
            headers: {
                access_token: token
            }
        })
        cb(result.data);
        // console.log(token);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (datas, loginCbHandler) => {
    try {
        await axios({
            method: 'POST',
            url: URL + "/create",
            data: datas,
        })

        login({ email: datas.email, password: datas.password }, loginCbHandler)

        Swal.fire(
            'Add item',
            'Item has been added',
            'success'
        )
    } catch (e) {
        console.log(e)
    }
}

export {
    readDataUser,
    createUser,
    login
}