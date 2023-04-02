import React from 'react'
import Img from '../../../public/placeholder-image.png'
import Image from 'next/image'

const PostCard = () => {
    return (
        <div className="bg-white rounded shadow-md overflow-hidden">
            <Image src={Img} alt='image'></Image>
            <div className='m-4'>
                <p className='font-bold text-base mb-2'>Sed ac dolor sed sed aliquet ac proin vitae dui.</p>
                <p className='text-gray-500 text-sm'>Volutpat varius non malesuada scelerisque mi. Egestas diam ut facilisi neque interdum rutrum id. Neque consectetur neque tellus et.</p>
                <span className='text-green-400 block font-semibold text-end mt-4'>Read More...</span>
            </div>
        </div>
    )
}

export default PostCard