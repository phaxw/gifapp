import React from 'react';
import styled from 'styled-components';
import 'animate.css';

    const GifDiv = styled.div`
        align-content: center;
        margin-bottom: 10px;
        margin-right: 10px;
        
    `

    const GifImage = styled.img`
        min-height: ${props => props.height}; 
        min-width:  ${props => props.width};
    `

    /* const GifText = styled.p`
        padding: 5px;
        text-align: center;
    ` */

const GifGridItem = ({ id, title, url, height, width }) => {
    

    return (
        <GifDiv className="card animate__animated animate__fadeIn">
            <GifImage src={url} alt={title} />
        </GifDiv>
    )
}

export default GifGridItem
