import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/api/users/account'

const readDataUser = async (cb) => {
    const token = localStorage.getItem('access_token');
    console.log(token);
    try {
        let result = await axios({
            method: 'GET',
            url: URL,
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

export {
    readDataUser
}