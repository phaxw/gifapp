import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'One Piece']

    const [category, setCategory] = useState('')

    return (
        <>
            <h2 className="title_text">GifExpertApp</h2>
            <AddCategory
                setCategory={setCategory}
            />
            <hr />

            <GifGrid key={category} category={category} />

        </>
    )
}

/* AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
} */

export default GifExpertApp
