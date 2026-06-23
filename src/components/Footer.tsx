import { ExternalButton } from "./ExternalButton"
import mail from "../assets/google-gmail-svgrepo-com.svg"
import linkedin from "../assets/linkedin-svgrepo-com.svg"
import github from "../assets/github-svgrepo-com.svg"
import gustavomiranda from "../assets/gustavomiranda.svg"
import "../styles/footer.css"

export function Footer() {
    return (

        <footer id="footer">
            <img src={gustavomiranda} alt="" style={{ width: "160px", height: "80px" }} />
            <h4>Outras formas de contato:</h4>
            <section className="tres-partes">
                <div className="contact-col">
                    <div className="icons-row">
                        <ExternalButton href="https://mail.google.com/mail/?view=cm&to=gustavomiranda230206@gmail.com" svgUrl={mail} label="" />
                        <ExternalButton href="https://www.linkedin.com/in/gustavo-miranda-dos-santos-5301062b6/" svgUrl={linkedin} label="" />
                        <ExternalButton href="https://github.com/gustavomiranda2302" svgUrl={github} label="" />
                    </div>
                </div>

                <div className="navigation">
                    <h4>Navegação</h4>
                    <a href="#hero">Home</a>
                    <a href="#solution">Soluções</a>
                    <a href="#testimonials">Depoimentos</a>
                    <a href="#pricing">Planos</a>
                    <a href="#contact">Contato</a>
                </div>

                <div className="projects">
                    <h4>Projetos</h4>
                    <a href="https://github.com/gustavomiranda2302/moviefinder" target="_blank" rel="noreferrer noopener">MovieFinder</a>
                    <a href="https://github.com/gustavomiranda2302/python-anki" target="_blank" rel="noreferrer noopener">PythonAnki</a>
                    <a href="https://github.com/gustavomiranda2302?tab=repositories" target="_blank" rel="noreferrer noopener">Ver todos →</a>
                </div>
            </section>
            <div className="dedicatoria">
                <p>feito com muito carinho em 06/2026</p>
            </div>
        </footer>
    )
}