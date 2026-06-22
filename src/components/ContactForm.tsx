import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isChallengeCompleted, setChallengeCompleted] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    function isValidForm() {
        const isValidFields = !isNullOrEmpty(formFields.name)
            && !isNullOrEmpty(formFields.email);

        return isValidFields && isChallengeCompleted;
    }

    async function handeleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!isValidForm()) {//Valida os campos com inputreturn;
        }

        setChallengeCompleted(false);

        await handleSendEmail();

        resetFields();
        recaptchaRef.current?.reset();
    }

    function handleCompleteChallenge(token: string | null) {
        if (!token) {
            setChallengeCompleted(false);
            return;
        }

        setChallengeCompleted(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
