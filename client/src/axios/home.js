import axios from 'axios'

const URL = 'https://zoofeed-api-gamma.vercel.app/api'

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