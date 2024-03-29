import axios from 'axios'
import Swal from 'sweetalert2'
const accessToken = localStorage.getItem("access_token");
const URL = 'https://zoofeed-api-gamma.vercel.app/api/foods'

const createData = async (items) => {
    try {
        await axios({
            method: 'POST',
            url: URL + "/add",
            data: items,
            headers: { 'Content-Type': 'multipart/form-data', access_token: `${accessToken}` }
        })

        await Swal.fire(
            'Add item',
            'Item has been added',
            'success'
        )

        window.location.reload()
    } catch (e) {
        console.log(e)
    }
}

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


const updateData = async (id, items) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: items,
            headers: { 'Content-Type': 'multipart/form-data', access_token: `${accessToken}` }
        })

        await Swal.fire(
            'Edit item ' + id,
            'Item ' + id + ' has been updated',
            'success'
        )
        window.location.reload()
    } catch (e) {
        console.log(e)
    }
}

const deleteDataF = async (id) => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios({
                    method: "DELETE",
                    url: URL + '/delete/' + id,
                    headers: { access_token: `${accessToken}` }
                })

                await Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                window.location.reload()
            }
        })

    } catch (e) {
        console.log(e)
    }
}

const detailData = async (id, cb) => {
    try {
        let result = await axios({
            method: "GET",
            url: URL + '/detail/' + id
        })

        cb(result.data)
    } catch (e) {
        console.log(e)
    }
}

export {
    createData,
    readData,
    updateData,
    deleteDataF,
    detailData
}