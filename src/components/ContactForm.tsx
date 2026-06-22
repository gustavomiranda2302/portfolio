import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import type { FormEvent } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ message: '', email: '', });
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [message, setMessage] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);


    function isNullOrEmpty(valor: string | null | undefined): boolean {
        return valor == null || valor.trim() === '';


    }
    function resetFields() {
        setFormData({
            message: "",
            email: ""
        });
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);

    }
    async function handleSendEmail() {
        const response = await fetch("/.netlify/functions/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.email,
                message: formData.message,
                recaptchaToken
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        return data;
    }


    function isValidForm() {
        const isValidFields = !isNullOrEmpty(formData.message)
            && !isNullOrEmpty(formData.email);

        return isValidFields && recaptchaToken !== null;

    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!isValidForm()) {//Valida os campos com inputreturn;
            setMessage("Preencha todos os campos e conclua o captcha.");
            return;
        }
        try {
            setMessage("");

            await handleSendEmail();

            resetFields();
            setMessage("Mensagem enviada com sucesso!");
        } catch (error) {
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Erro ao enviar mensagem."
            );
        }
    }

    function handleCompleteChallenge(token: string | null) {
        setRecaptchaToken(token);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Mensagem:
                    <input
                        type="text"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </label>
            </div>
            <div>
                <ReCAPTCHA ref={recaptchaRef} sitekey={"KEY_RECAPTCHA"} onChange={handleCompleteChallenge} />
            </div>
            <button type="submit">Enviar</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ContactForm;
