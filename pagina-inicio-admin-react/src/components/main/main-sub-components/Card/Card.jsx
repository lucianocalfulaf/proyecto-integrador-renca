import './card-styles/Card.scss';

const cardData = [
    { id:"01", name: "Boris Azabal Mar", rute: "Ruta Azul", email: "boris.A@correo.cl", src: "/src/assets/boris.png"},
    { id:"02", name: "Carmen Ruíz Pérez", rute: "Ruta Naranja", email: "c_Ruiz32.A@correo.cl", src: "/src/assets/carmen.png"},
    { id:"03", name: "Aldo Gómez", rute: "Ruta Celeste", email: "aldo2023@correo.cl", src: "/src/assets/aldo.png"}
];

const Card = () => {
    return (
        <div className="card">
            {cardData.map((personList) => {
                return (
                    <article className="card__unit" key={personList.id}>
                        <img src={personList.src} className="foto-perfil"alt={"Foto de " + personList.name}/>
                        <p className="card__info">{personList.name}</p>
                        <p className="card__info">{personList.rute}</p>
                        <p className="card__info">{personList.email}</p>
                        <button className="card__edit"><a href="#">Editar Perfil</a></button>
                    </article>
                );
            })}
        </div>
    );
}

export default Card;

