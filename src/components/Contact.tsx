import { useState } from "react"

export function Contact() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    async function handleSubmit() {
        if (!email || !message) return
        setStatus("loading")

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message })
            })

            if (!response.ok) throw new Error()
            setStatus("success")
            setEmail("")
            setMessage("")
        } catch {
            setStatus("error")
        }
    }

    return (
        <section id="contact">
            <p>teste</p>
            <h3>TESTE h3</h3>
            <p>entre em contato com a gente, ficaremos muito felizes em te responder :)</p>

            <input
                type="email"
                placeholder="insira seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Sua mensagem!!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button onClick={handleSubmit} disabled={status === "loading"}>
                {status === "loading" ? "Enviando..." : "Enviar"}
            </button>

            {status === "success" && <p>Mensagem enviada com sucesso!</p>}
            {status === "error" && <p>Erro ao enviar. Tente novamente.</p>}
        </section>
    )
}