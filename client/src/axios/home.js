import axios from 'axios'

const URL = 'http://localhost:3000/api'

const readData = async cb => {
    try {
        let dataItems = await axios({
            method: 'GET',
            url: URL
        })
        cb(dataItems.data);
    } catch (error) {
        console.log(error);
    }
}

export default readData;