import "../styles/utility.css"
import "../styles/header.css"
import "../styles/hero.css"
import "../styles/testimonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import "../styles/footer.css"
import "../styles/contactForm.css"


import gustavomiranda from "../assets/gustavomiranda.svg"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import Button from "../components/Button"
import quadrado1 from "../assets/quadrado1.svg"
import quadrado2 from "../assets/quadrado2.svg"
import github from "../assets/github-svgrepo-com.svg"
import mail from "../assets/google-gmail-svgrepo-com.svg"
import linkedin from "../assets/linkedin-svgrepo-com.svg"

import { useState } from "react"
import TestimonialCard from "../components/TestimonialCard"
import SolutionCard from "../components/SolutionsCard"
import { Pricing } from "../components/Pricing"
import { ExternalButton } from "../components/ExternalButton"
import { Contact } from "../components/Contact"
import ContactForm from "../components/ContactForm"
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
                        <TestimonialCard image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtq-otXCKHkf4skbh1MMMOObrOXKF_zfPZIFt2IK3Nrs4TgcU_ZjOdPZmtUj02j5Hjt-o0bgYiwl0zwjvMnukk2COgVE8xe0QYHxZZkCN&s=10"} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
                        <TestimonialCard image={"data:image/jpeg;base64,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"} testimony="nao sei jogar bola" nome="endrick" cargo="jose ruela" quantidadeEstrelas={2} />
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
                    <Pricing
                        plan="basic"
                        planTitle="Básico"
                        planDescription="Você tem direito a uma prova das comidas DonaFrost."
                        price={0}
                        buttontxt="Pedir agora"
                        srcpic={gustavomiranda}
                        features={[
                            "Retire na loja",
                            "Apenas 1 por CPF"
                        ]}
                    />
                    <Pricing
                        plan="basic"
                        planTitle="Básico"
                        planDescription="Você tem direito a uma prova das comidas DonaFrost."
                        price={0}
                        buttontxt="Pedir agora"
                        srcpic={gustavomiranda}
                        features={[
                            "Retire na loja",
                            "Apenas 1 por CPF"
                        ]}
                    />
                    <Pricing
                        plan="premium"
                        planTitle="Premium"
                        planDescription="Para quem precisa de uma marmita diária, muito saborosa."
                        price={89.90}
                        bonus="1º MÊS COM DESCONTO"
                        buttontxt="Pedir agora"
                        srcpic={gustavomiranda}
                        features={[
                            "2 Entregas",
                            "5 Refeições por semana",
                            "2 Sucos por semana"
                        ]}
                    />
                </section>


            </section>

            <ContactForm />


            <footer id="footer">
                <img src={gustavomiranda} alt="" style={{ width: "160px", height: "80px" }} />
                <h3>Outras formas de contato:</h3>
                <section className="tres-partes">

                    <div className="contact-col">
                        <h4>Gustavo Miranda</h4>
                        <div className="icons-row">
                            <ExternalButton href="https://mail.google.com/mail/?view=cm&to=gustavomiranda230206@gmail.com" svgUrl={mail} label="" />
                            <ExternalButton href="https://www.linkedin.com/in/gustavo-miranda-dos-santos-5301062b6/" svgUrl={linkedin} label="" />
                            <ExternalButton href="https://github.com/gustavomiranda2302" svgUrl={github} label="" />

                        </div>




                    </div>

                    <div className="navigation">
                        <div className="navigation">
                            <h4>Navegação</h4>
                            <a href="#hero">Home</a>
                            <a href="#solution">Soluções</a>
                            <a href="#testimonials">Depoimentos</a>
                            <a href="#pricing">Preços</a>
                            <a href="#contact">Contato</a>
                        </div>

                    </div>

                    <div className="projects">
                        <h4>Projetos</h4>
                        <a href="https://github.com/gustavomiranda2302/moviefinder" target="_blank" rel="noreferrer noopener ">MovieFinder</a>
                        <a href="https://github.com/gustavomiranda2302/python-anki" target="_blank" rel="noreferrer noopener ">PythonAnki</a>
                        <a href="https://github.com/gustavomiranda2302?tab=repositories" target="_blank" rel="noreferrer noopener ">Ver todos →</a>
                    </div>


                </section>
                <div className="dedicatoria">
                    <p>feito com muito carinho em 06/2026</p>
                </div>
            </footer>
        </>

    )
}


