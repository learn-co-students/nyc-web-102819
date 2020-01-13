import React from 'react';

function CatItem(props) {
    let { id, name, image, selectCat } = props; 

    return (
        <div className="cat-item" onClick={() => selectCat(id)}>
            <h3>{name}</h3>
            <img alt={name} src={image} />
        </div>
    )
}

export default CatItem;