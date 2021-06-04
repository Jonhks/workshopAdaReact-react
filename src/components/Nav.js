import React, {useState} from 'react';


const Nav = () => {

    const [colorNav, setColorNav] = useState('color-nav');
    const [clicks, setClicks] = useState(0);


    const changeColor = () => {
        setColorNav('color-nav-white') 
    }

    const contarClicks = () => {
        setClicks(clicks + 1);
    }

    return ( 
        // <nav className='color-nav'>
        <nav className={colorNav}>
            <ul>
                <li>Home</li>
                <li>WebShop</li>
                <li>Contact</li>
                {/* <button onClick={alert('inicio')}>click Aqui</button> */}
                {/* <button onClick={ejemplo}>click Aqui</button> */}
                <button onClick={changeColor}>click Aqui</button>

                {/* cuando no funcione el cambio de color acá pasamos a ver el contador y vemos inicios del estado */}
                <button onClick={contarClicks}>Contar Clicks</button>
                <div> Llevamos: {clicks} clicks</div>
            </ul>
        </nav>
     );
}
 
export default Nav;