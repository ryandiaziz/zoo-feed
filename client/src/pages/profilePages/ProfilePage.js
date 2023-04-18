import React, { useState, useEffect } from 'react';
import { getLikeData } from '../../axios/animalUser';
import { updateUser } from '../../axios/user';
import { FaRegEdit } from 'react-icons/fa';
import ProfileTextInput from './components/ProfileTextInput';

const ProfilePage = (props) => {
    const { userData } = props;
    const [likeData, setLikeData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [uploadImage, setUploadImage] = useState(userData.imageUrl);
    const [form, setForm] = useState({
        name: userData.name,
        age: userData.age,
        email: userData.email,
        imageUrl: userData.imageUrl,
        roleId: userData.roleId
    });

    useEffect(() => {
        getLikeData((result) => setLikeData(result));
    }, [])

    const saveHandler = () => {
        setEdit(false);
        updateUser(userData.id, form)
    }

    function handleUploadChange(e) {
        let uploaded = e.target.files[0];
        setForm({ ...form, imageUrl: uploaded });
        setUploadImage(URL.createObjectURL(uploaded));
    }
    return (
        <>
            <div className='relative border-2 my-10 mx-40 shadow-lg rounded-xl py-5 bg-red-300'>
                {
                    !edit
                        ? <div class="flex justify-end">
                            <div
                                onClick={() => setEdit(true)}
                                class="hover:scale-90 transition-all flex items-center bg-green-500 rounded-md shadow-md pd-2 mb-5 absolute right-5 cursor-pointer"
                            >
                                <span class="font-noto font-bold text-m text-center mr-2 ml-2 uppercase text-white">
                                    EDIT
                                </span>
                                <div>
                                    <FaRegEdit
                                        className="mr-2 mt-2 mb-2"
                                        size={25}
                                        color="#FFFF"
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <div className='z-10 flex justify-end'>
                            <button
                                onClick={() => saveHandler()}
                                className="font-noto font-bold text-m absolute right-5 w-24 text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                }
                <div className='w-[1000px] mx-auto flex items-center justify-between bg-yellow-300'>
                    <div className='w-1/2 bg-green-300'>
                        <div className="mb-3">
                            <div className="mb-4">
                                <img
                                    src={uploadImage}
                                    className="img-thumbnail"
                                    alt="Profile Image"
                                    width="300px"
                                />
                            </div>
                            {
                                edit
                                    ? <input
                                        onChange={handleUploadChange}
                                        className="form-control"
                                        type="file"
                                        id="formFile"
                                    />
                                    : <div></div>
                            }
                        </div>
                    </div>
                    <div className="overflow-x-auto w-2/5 ml-9 le">
                        <ProfileTextInput
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            label={'Name'}
                            name={'name'}
                            placeHolder={'Enter your name'}
                            value={form.name}
                            edit={edit}
                        />
                        <ProfileTextInput
                            onChange={(e) => setForm({ ...form, age: e.target.value })}
                            label={'Age'}
                            name={'age'}
                            placeHolder={'Enter your age'}
                            value={form.age}
                            edit={edit}
                        />
                        <ProfileTextInput
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            label={'Email'}
                            name={'email'}
                            placeHolder={'Enter your email'}
                            value={form.email}
                            edit={edit}
                        />
                        <ProfileTextInput
                            onChange={(e) => setForm({ ...form, roleId: e.target.value })}
                            label={'Role'}
                            name={'role'}
                            placeHolder={'Enter your role'}
                            edit={false}
                            value={
                                form.roleId === 1
                                    ? 'Visitor'
                                    : 'Zookeeper'
                            }
                        />
                    </div>
                </div>
            </div>
            {
                likeData
                    ? <div className='my-10 mx-40 px-10 py-5 shadow-lg rounded-xl border-2 bg-white'>
                        <h3 className='font-noto font-bold text-3xl text-center mb-5 uppercase'>Favorite Animal</h3>
                        <div className="container flex flex-wrap gap-4 justify-center">
                            {

                                likeData.map(data => {
                                    return (
                                        <div className='bg-white pb-1 rounded-md shadow-md'>
                                            <img src={data.imageUrl} className="h-40 w-40 object-cover rounded-t-md" alt="" />
                                            <div className='text-center font-noto font-normal'>{data.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    : <div></div>
            }
        </>
    )
}

export default ProfilePage