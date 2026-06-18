import "../styles/utility.css"
import "../styles/header.css"
import "../styles/hero.css"
import "../styles/testimonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import gustavomiranda from "../assets/gustavomiranda.svg"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import Button from "../components/Button"
import quadrado1 from "../assets/quadrado1.svg"
import quadrado2 from "../assets/quadrado2.svg"
import { useState } from "react"
import TestimonialCard from "../components/TestimonialCard"
import SolutionCard from "../components/SolutionsCard"
export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={gustavomiranda} alt="Gustavo Miranda" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login </a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={quadrado1} alt="" />
                </span>
                <img src={quadrado2} alt="" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá, eu sou o Gustavo
                    </p>
                    <h1>Um desenvolvedor que pode te entregar mais</h1>
                    <p>Voce sabe que </p>
                    <div className="flex gap-1">
                        <span><Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>

            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>DonaFrost </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
                <section className="solutions">

                    <SolutionCard image={gustavomiranda} title="produto vencedor" text="teste" />
                    <SolutionCard image={gustavomiranda} title="produto vencedor" text="teste" />
                    <SolutionCard image={gustavomiranda} title="produto vencedor" text="teste" />

                </section>

            </section >
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada Cliente Importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard image={gustavomiranda} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
                        <TestimonialCard image={gustavomiranda} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
                        <TestimonialCard image={gustavomiranda} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
                        <TestimonialCard image={gustavomiranda} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
                    </div>

                    <div className="carousel-content">
                        <TestimonialCard image={gustavomiranda} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
                        <TestimonialCard image={gustavomiranda} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
                        <TestimonialCard image={gustavomiranda} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
                        <TestimonialCard image={gustavomiranda} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />


                    </div>
                </section>
            </section>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">



                    <div className="pricing-card" >
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={gustavomiranda} alt="ícone gustavomiranda" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={gustavomiranda} alt="ícone gustavomiranda" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>
                    <div className="pricing-card" >
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={gustavomiranda} alt="ícone gustavomiranda" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={gustavomiranda} alt="ícone gustavomiranda" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>






                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={gustavomiranda} alt="ícone gustavomiranda" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={gustavomiranda} alt="ícone gustavomiranda" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={gustavomiranda} alt="ícone gustavomiranda" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>
                </section>


            </section>

            <section id="contact">
                <p>teste</p>
                <h3>
                    TESTE h3
                </h3>
                <text>
                    entre em contato com a gente, ficaremos muito felizes em te responder :)
                </text>
                <input type="email" placeholder="insira seu email" />

                <input type="text" placeholder="Sua mensagem!!" />
                <button>Enviar</button>




            </section>













        </>

    )
}


