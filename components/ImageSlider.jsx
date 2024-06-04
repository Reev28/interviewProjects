'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dogs from '@/public/library/dogImagesData'
import { FaCircle } from 'react-icons/fa'

const url = 'https://picsum.photos/v2/list?page=2&limit=3';

const ImageSlider = () => {
    const [image, setImage] = useState(0)

    const handleImageChange = (e) => {
        const btnType = e.target.id;
        switch (btnType) {
            case 'prevImage':
                setImage((image - 1) < 0 ? dogs.length - 1 : image - 1);
                break;
            case 'nextImage':
                setImage(image + 1 > dogs.length - 1 ? 0 : image + 1);
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        const fetchImages = async () => {

            try {
                const result = await fetch(url)
                const data = await result.json();
            }
            catch {

            }
        }

        fetchImages();
    }, [])

    return (
        <section>
            <div className='corousal'>
                <button id='prevImage' onClick={handleImageChange}>{`<-`}</button>
                <Image src={dogs[image].img} alt="randImage" width={100} height={100} />
                <button id='nextImage' onClick={handleImageChange}>{`->`}</button>
            </div>
            <div className='totalImgOverview'>
                {dogs.map((dog, index) => {
                    return (
                        <div key={index} onClick={() => { setImage(dog.id - 1) }}><FaCircle className={image === dog.id - 1 ? 'activeImage' : ''} /></div>
                    )
                })}
            </div>
        </section>
    )
}

export default ImageSlider