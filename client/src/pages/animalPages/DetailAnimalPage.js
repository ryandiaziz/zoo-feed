import React from 'react'

const DetailAnimalPage = () => {
    return (
        <div className='bg-green-500 my-10 mx-40 shadow-lg rounded-xl'>
            <h3 className='font-noto font-bold text-3xl text-center'>ANIMAL NAME</h3>
            <div className='w-[1000px] mx-auto px-3 bg-red-300 flex items-center justify-between'>
                <div className='w-1/2 bg-slate-400'>
                    <img src="https://fakeimg.pl/350x200/" alt="" />
                </div>
                <div class="relative overflow-x-auto w-1/2">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Name
                                </th>
                                <td class="px-6 py-4">
                                    :
                                </td>
                                <td class="px-6 py-4">
                                    Harimau
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Age
                                </th>
                                <td class="px-6 py-4">
                                    :
                                </td>
                                <td class="px-6 py-4">
                                    12
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Sex
                                </th>
                                <td class="px-6 py-4">
                                    :
                                </td>
                                <td class="px-6 py-4">
                                    Male
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Class
                                </th>
                                <td class="px-6 py-4">
                                    :
                                </td>
                                <td class="px-6 py-4">
                                    Mamal
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Habitat
                                </th>
                                <td class="px-6 py-4">
                                    :
                                </td>
                                <td class="px-6 py-4">
                                    Tropis
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default DetailAnimalPage