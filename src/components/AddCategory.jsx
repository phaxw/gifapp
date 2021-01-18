import React, { useState, useEffect, useRef } from 'react'

const AddCategory = ({ setCategory }) => {

    //State
    const [inputValue, setInputValue] = useState("");
    const [placeholderValues, setplaceHolderValues] = useState(["Search all the GIFs and Stickers",
        "@username + tag to search within a verified channel"])

    //Ref
    const categoryInput = useRef(null)

    //Variables
    var counter = 0;
    var placeholdersLength = placeholderValues.length;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (inputValue.trim().length > 0) {
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

    const changePlaceholder = () => {
        if (counter >= placeholdersLength) {
            counter = 0;
        }
        categoryInput.current.setAttribute('placeholder',placeholderValues[counter])
        counter++;
    }

    setInterval(changePlaceholder, 2000);

    return (
        <form>
            <div>
                <input
                    ref={categoryInput}
                    type="text"
                    value={inputValue}
                    onChange={handleSearch}
                />
            </div>
        </form>
    )
}

export default AddCategory
