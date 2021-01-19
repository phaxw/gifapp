import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGif(category);

    return (
        <>
            { loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {   
                    category 
                    ? 
                        images.map(img => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                    :
                            <h1>Nada...</h1>
                }
            </div>
        </>
    )
}

export default GifGrid
