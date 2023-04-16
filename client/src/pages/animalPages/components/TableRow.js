import React from 'react'

export const TableRow = (props) => {
    return (
        <tr class="bg-white">
            <th scope="row" class="text-md px-6 py-4 text-gray-900 whitespace-nowrap font-noto font-normal">
                {props.label}
            </th>
            <td class="text-md px-6 py-4 font-noto font-normal">
                :
            </td>
            <td class="text-md px-6 py-4 font-noto font-normal">
                {props.data}
            </td>
        </tr>
    )
}

export default TableRow
