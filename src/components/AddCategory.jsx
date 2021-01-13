import React, { useState, useEffect } from 'react'

const AddCategory = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false)
    /* const handleInputValue = e => {
        setInputValue(e.target.value)
    } */

    useEffect( () => {
        const timeoutId = setTimeout(() => {
            if (inputValue.trim().length > 0 ) {
                setCategory(inputValue)
            } else {
                setCategory("")
            }
        }, 500);
        return () => clearTimeout(timeoutId);

    }, [inputValue, setCategory])

    const handleSearch = e => {
        setInputValue(e.target.value)
    }

    return (
        <form>
            <input
                type="text"
                value={inputValue}
                onChange={handleSearch}
            />
        </form>
    )
}

export default AddCategory
