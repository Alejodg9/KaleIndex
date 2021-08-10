import './HeaderKale.scss';


const Header = () => {



    return (
        <>
            <div className="mainContainer" >
                <div className="izq" >
                    <div className="heroImg"></div>
                </div>
                <div className="der" >
                    <h1>Hola! <br /> Somos <span className="green" >Kale</span>indeX</h1>
                    <p>Buscamos combinar <span className="green" > innovación</span>, <span className="green" >lógica</span> y <span className="green" >diseño</span> para crear productos digitales de alto valor agregado. Siempre abiertos a nuevos desafios!</p>
                    <button class="button button1">Contanos tu idea</button>
                </div>
            </div>
        </>
    )
}

export default Header;


