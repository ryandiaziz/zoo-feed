import axios from 'axios'

const URL = 'http://localhost:3000/api/animaluser';
const token = localStorage.getItem('access_token');

const userLike = async () => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + 'add',
            data: '',
            headers: {
                access_token: token
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getLikeData = async (cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL + '/info',
            headers: {
                access_token: token
            }
        })
        cb(result.data.resultUA.animals);
    } catch (error) {
        console.log(error);
    }
}

export {
    userLike,
    getLikeData
}