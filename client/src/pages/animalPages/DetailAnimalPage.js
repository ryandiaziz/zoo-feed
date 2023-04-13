import React from 'react'

const DetailAnimalPage = () => {
    return (
        <div className='w-[1000px] mx-auto px-3 bg-red-300 flex items-center justify-between'>
            <img src="https://fakeimg.pl/350x200/" alt="" />
            <div class="relative overflow-x-auto">
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
    )
}

export default DetailAnimalPage