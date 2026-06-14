interface TestimonialCardProps {
    image: string;
    testimony: string;
    nome: string;
    cargo: string;
    quantidadeEstrelas: number;

}
export default function TestimonialCard(props: TestimonialCardProps) {
    const ListaEstrelas = new Array(props.quantidadeEstrelas).fill(1);
    const ListaEstrelasVazias = new Array(5 - props.quantidadeEstrelas).fill(1);

    return (
        <div className="carousel-card">
            <img src={props.image} alt="foto do cliente" />
            <span className="testimony">
                <p>
                    {props.testimony}
                </p>
            </span>
            <span className="rating">
                {
                    ListaEstrelas.map((item, index) => (
                        <img key={index} src={".svg da estrela"} alt="estrelas de avaliação" width={22} height={20} />
                    ))
                }
                {
                    ListaEstrelasVazias.map((item, index) => (
                        <img key={index} src={".svg da estrela vazia"} alt="estrelas de avaliação" width={22} height={20} />
                    ))
                }


            </span>
            <span className="name">
                <p>{props.nome}</p>
                <p>{props.cargo}</p>
            </span>
        </div>

    )


}


//
//
//        <span className="rating">
//                {Array.from({ length: 5 }, (_, i) => (
//                   <img
//                      key={i}
//                     src={i < props.quanridadeEstrelas ? "/path/to/filled-star.png" : "/path/to/empty-star.png"}
//                    alt="estrelas de avaliação"
//                   width={22}
//                  height={20}
//             />
//       ))}
