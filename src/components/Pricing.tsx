import "../styles/pricing.css"
import Button from "./Button"
interface PricingProps {
    bonus?: string,
    plan: "premium" | "basic",
    planTitle: string,
    planDescription: string,
    price: number,
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
                <h2>R$ {price.toFixed(2)}</h2>
                <p>/mês</p>
            </span>
            <Button text={buttontxt} secondary={!isPremium} />
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
