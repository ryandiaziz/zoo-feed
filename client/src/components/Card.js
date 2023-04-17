import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import ButtonGroup from './ButtonGroup'

const Card = (props) => {
    const { userData, loginStatus, items, likeData, search } = props
    const [like, setLike] = useState(false);

    const isAnimal = props.isAnimal || false;

    const aksi = () => {
        like === false ?
            setLike(true)
            :
            setLike(false)
    }
    console.log(search);
    return (
        <>
            {
                items.filter((item) => {
                    return search.toLowerCase() === ''
                        ? item
                        : item.name.toLowerCase().includes(search);
                })
                    .map(item => {
                        return (
                            <div key={item.id} className="rounded-md shadow-lg overflow-hidden bg-white w-[300px] hover:scale-95 hover:bg-slate-100 transition-all duration-150 relative">
                                {/* show LIKES */}
                                {
                                    loginStatus ?
                                        isAnimal ?
                                            <div className='absolute top-3 right-3 cursor-pointer hover:scale-90'>
                                                {
                                                    // like ?
                                                    //     <MdFavorite size={30} color='gold' onClick={() => aksi()} /> :
                                                    //     <MdFavoriteBorder size={30} color='gold' onClick={() => aksi()} />
                                                    likeData.map(likeItem => {
                                                        if (likeItem.id === item.id) {
                                                            return (<MdFavorite key={likeItem.id} size={30} color='gold' onClick={() => aksi()} />)
                                                        }
                                                    })
                                                }
                                            </div>
                                            :
                                            <div></div>
                                        :
                                        <div></div>
                                }
                                {/* link */}
                                <Link to={
                                    `detail/${item.id}`
                                }>
                                    <img src={item.imageUrl} alt="Image" className='h-56 w-full object-cover object-top' />
                                    <div className='px-6 py-4'>
                                        <div className='font-noto font-bold text-xl mb-2 text-slate-700'>{item.name}</div>
                                        <p className='font-noto font-thin text-sm text-slate-600'> {item.ket}</p>
                                    </div>
                                </Link>
                                {
                                    userData.roleId === 2 ?
                                        <ButtonGroup id={item.id} />
                                        :
                                        <div></div>
                                }
                            </div>
                        )
                    })
            }
        </>
    )
}

export default Card
