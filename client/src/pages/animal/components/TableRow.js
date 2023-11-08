import React from 'react'

export const TableRow = (props) => {
    return (
        <tr className="bg-white">
            <th scope="row" className="text-md px-6 py-4 text-gray-900 whitespace-nowrap font-noto font-normal">
                {props.label}
            </th>
            <td className="text-md px-6 py-4 font-noto font-normal">
                :
            </td>
            <td className="text-md px-6 py-4 font-noto font-normal">
                {props.data}
            </td>
        </tr>
    )
}

export default TableRow
