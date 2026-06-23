import "../styles/pricing.css"
import Button from "./Button"
interface PricingProps {
    bonus?: string,
    plan: "premium" | "basic",
    planTitle: string,
    planDescription: string,
    price: string,
    features: string[],
    buttontxt: string,
    srcpic: string





}
export function Pricing({ srcpic, bonus, plan, planTitle, planDescription, price, features, buttontxt }: PricingProps) {
    const isPremium = plan === "premium"
    return (
        <div className={`pricing-card ${isPremium ? "premium" : ""}`}>
            {bonus && (
                <span className="bonus">
                    <p>{bonus}</p>
                </span>
            )}
            <span className="plan">
                <h3>{planTitle}</h3>
                <p>{planDescription}</p>
            </span>
            <span className="price">
                <h3>{price}</h3>
            </span>
            <a href="https://www.linkedin.com/in/gustavo-miranda-dos-santos-5301062b6/" target="_blank" rel="noreferrer noopener" aria-label={`${planTitle} - ${buttontxt}`}>
                <Button text={buttontxt} secondary={!isPremium} />
            </a>
            <span className="hr" />
            <span className="features">
                {features.map((feature, index) => (
                    <span key={index} className="feature-item">
                        <img src={srcpic} alt=" icone" width={24} height={24} />
                        <span>{feature}</span>
                    </span>

                ))}
            </span>

        </div>

    )
}
