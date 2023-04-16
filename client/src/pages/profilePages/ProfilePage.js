import React from 'react'
import TableRow from '../animalPages/components/TableRow'

const ProfilePage = (props) => {
    const { userData } = props
    return (
        <>
            <div className='border-2 my-10 mx-40 shadow-lg rounded-xl py-5'>
                <h3 className='font-noto font-bold text-3xl text-center mb-5 uppercase'>{userData.name}</h3>
                <div className='w-[1000px] mx-auto flex items-center justify-between'>
                    <div className='w-1/2'>
                        <img src={userData.imageUrl} alt="" className='rounded-full w-[350px] h-[350px] object-cover object-top' />
                    </div>
                    <div class="relative overflow-x-auto w-1/2 ml-9">
                        <table class="w-full text-sm text-left text-gray-500">
                            <tbody>
                                <TableRow label={'Age'} data={`${userData.age} years`} />
                                <TableRow label={'Email'} data={userData.email} />
                                <TableRow label={'Role'}
                                    data={
                                        userData.roleId === 1 ? 'Visitor' : 'Zoo Keeper'} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div className='my-10 mx-40 px-10 py-5 shadow-lg rounded-xl border-2'>
                <h3 className='font-noto font-bold text-3xl text-center mb-5 uppercase'>Animal food</h3>
                <div className="container flex flex-wrap gap-4 justify-center">
                    {
                        foods.map(food => {
                            return (
                                <div className='bg-white pb-1 rounded-md shadow-md'>
                                    <img src={food.imageUrl} className="h-40 w-40 object-cover rounded-t-md" alt="" />
                                    <div className='text-center font-noto font-normal'>{food.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
        </>
    )
}

export default ProfilePage