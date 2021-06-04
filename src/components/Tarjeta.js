import React from 'react';

const Tarjeta = (props) => {
    const {nombre, precio, descripcion, img} = props;
    return (
        <section className="product">
            <img src={img} alt={nombre}/>
            <h2 className="header">{nombre}</h2>
            <p className="description">{descripcion}</p>
            <p className="price">${precio}</p>
            <div className="btn">Add to cart</div>
            <div className="quickview">Quickview</div>
        </section>
    );
}

export default Tarjeta;