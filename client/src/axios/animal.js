import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/api/animals'

const createData = async (items) => {
    try {
        // console.log(items);
        await axios({
            method: 'POST',
            url: URL + "/create",
            data: items
        })

        Swal.fire(
            'Add item',
            'Item has been added',
            'success'
        )
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
        // console.log(datas);
    } catch (error) {
        console.log(error);
    }
}


const updateData = async (id, items) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: items
        })

        Swal.fire(
            'Edit item ' + id,
            'Item ' + id + ' has been updated',
            'success'
        )
        console.log(result.data)
    } catch (e) {
        console.log(e)
    }
}

const deleteData = async (id) => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios({
                    method: "DELETE",
                    url: URL + '/delete/' + id
                })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
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
    deleteData,
    detailData
}