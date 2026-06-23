import "../styles/utility.css"
import "../styles/header.css"
import "../styles/hero.css"
import "../styles/contactForm.css"
import gustavomiranda from "../assets/gustavomiranda.svg"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import quadrado1 from "../assets/quadrado1.svg"
import quadrado2 from "../assets/quadrado2.svg"
import dhh from "../assets/dhh.webp"
import linus from "../assets/linus.jfif"
import bjarne from "../assets/bjarne.webp"
import bob from "../assets/bob.jfif"
import check from "../assets/check.svg"
import web from "../assets/desenvolvimento-web.svg"
import backend from "../assets/backend.svg"
import infra from "../assets/infra.svg"
import { useState } from "react"
import { Button, TestimonialCard, SolutionCard, Pricing, Footer, ContactForm } from "../components"

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={gustavomiranda} alt="Gustavo Miranda" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Planos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="https://www.linkedin.com/in/gustavo-miranda-dos-santos-5301062b6/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                            <Button text="Me contrate" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#">Home</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Planos</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
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
                    <h1>Um dev que transforma código em solução real</h1>
                    <p>
                        Estudante de Engenharia de Software na FAG, apaixonado por desenvolvimento.
                        Busco meu primeiro estágio para colocar em prática o que aprendo — e aprender
                        muito mais do que já sei.
                    </p>
                    <div className="flex gap-1">
                        <span>
                            <a href="https://github.com/gustavomiranda2302?tab=repositories" target="_blank" rel="noreferrer noopener" aria-label={''}>
                                <Button text="Ver projetos" secondary />
                            </a>
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>O que eu posso entregar</h2>
                        </span>
                    </span>
                    <p>
                        Do front ao back, da ideia ao deploy. Veja o que já construí e o que posso construir pra você.
                    </p>
                </header>
                <section className="solutions">
                    <SolutionCard
                        image={web}
                        title="Desenvolvimento Web"
                        text="Sites e aplicações com React + TypeScript, do layout ao deploy. Já entreguei projetos reais em produção no Netlify."
                    />
                    <SolutionCard
                        image={backend}
                        title="Backend & APIs"
                        text="Experiência com Java/Spring Boot e Python. Sei montar uma API REST, entendo arquitetura hexagonal e já trabalhei com AWS SQS."
                    />
                    <SolutionCard
                        image={infra}
                        title="Infraestrutura & Suporte"
                        text="Atuei em TI com configuração de máquinas, M365, Bitdefender GravityZone e suporte técnico. Entendo como sistemas funcionam na prática."
                    />
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem entende</p>
                        <h2>O que dizem sobre mim</h2>
                    </span>
                    <p>
                        Coletei depoimentos de algumas referências da área. Pode acreditar — ou não. Mas o código fala por si mesmo.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            image={linus}
                            testimony="Finalmente alguém que commita com mensagens que fazem sentido. Contrate esse rapaz antes que eu o recrute pro kernel."
                            nome="Linus Torvalds"
                            cargo="Criador do Linux"
                            quantidadeEstrelas={5}
                        />
                        <TestimonialCard
                            image={bob}
                            testimony="Li o código dele. Funções pequenas, nomes que fazem sentido, zero gambiarras. Quase chorei."
                            nome="Uncle Bob"
                            cargo="Autor do Clean Code"
                            quantidadeEstrelas={5}
                        />
                        <TestimonialCard
                            image={dhh}
                            testimony="Não usa Rails, mas tudo bem. Ninguém é perfeito. O resto do trabalho é impecável."
                            nome="DHH"
                            cargo="Criador do Rails"
                            quantidadeEstrelas={4}
                        />

                        <TestimonialCard
                            image={bjarne}
                            testimony="Ele ainda vai aprender C++. Sinto isso. E quando aprender, vai ser perigoso."
                            nome="Bjarne Stroustrup"
                            cargo="Criador do C++"
                            quantidadeEstrelas={5}
                        />
                    </div>

                    <div className="carousel-content">
                        <TestimonialCard
                            image={linus}
                            testimony="Finalmente alguém que commita com mensagens que fazem sentido. Contrate esse rapaz antes que eu o recrute pro kernel."
                            nome="Linus Torvalds"
                            cargo="Criador do Linux"
                            quantidadeEstrelas={5}
                        />
                        <TestimonialCard
                            image={bob}
                            testimony="Li o código dele. Funções pequenas, nomes que fazem sentido, zero gambiarras. Quase chorei."
                            nome="Uncle Bob"
                            cargo="Autor do Clean Code"
                            quantidadeEstrelas={5}
                        />
                        <TestimonialCard
                            image={dhh}
                            testimony="Não usa Rails, mas tudo bem. Ninguém é perfeito. O resto do trabalho é impecável."
                            nome="DHH"
                            cargo="Criador do Rails"
                            quantidadeEstrelas={4}
                        />


                        <TestimonialCard
                            image={gustavomiranda}
                            testimony="Ele ainda vai aprender C++. Sinto isso. E quando aprender, vai ser perigoso."
                            nome="Bjarne Stroustrup"
                            cargo="Criador do C++"
                            quantidadeEstrelas={5}
                        />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Formas de colaborar</p>
                    <h2>Como posso te ajudar</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <Pricing
                        plan="basic"
                        planTitle="Freelancer"
                        planDescription="Precisa de um site, landing page ou script rápido? Me manda uma mensagem, a gente resolve."
                        price={"Combinamos pro projeto"}
                        buttontxt="Me chama"
                        srcpic={check}
                        features={[
                            "Landing pages",
                            "Scripts e automações",
                            "Orçamento sem compromisso"
                        ]}
                    />
                    <Pricing
                        plan="basic"
                        planTitle="Colaboração"
                        planDescription="Projetos open source, trabalhos acadêmicos em grupo, hackathons. Topo qualquer parada."
                        price={"De graça!"}
                        buttontxt="Vamos juntos"
                        srcpic={check}
                        features={[
                            "Open source",
                            "Hackathons",
                            "Projetos acadêmicos"
                        ]}
                    />
                    <Pricing
                        plan="premium"
                        planTitle="Estágio"
                        planDescription="O plano ideal. Quero entrar de cabeça numa equipe real, aprender rápido e entregar resultado desde o primeiro mês."
                        price={"Vamos conversar?"}
                        bonus="DISPONÍVEL AGORA"
                        buttontxt="Me contrate"
                        srcpic={check}
                        features={[
                            "Backend & APIs",
                            "React + TypeScript",
                            "Comprometimento total",
                            "Aprendo rápido, entrego rápido"
                        ]}
                    />
                </section>
            </section>
            <ContactForm />
            <Footer />
        </>
    )
}