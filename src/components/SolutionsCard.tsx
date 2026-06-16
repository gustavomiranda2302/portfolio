import "../styles/solution.css"
import "../styles/index.css"

interface SolutionsCardProps {
    image: string,
    alt?: string,
    title: string,
    text: string;


}
export default function SolutionCard({ image, alt, title, text }: SolutionsCardProps) {
    return (
        <div className="card">
            <img src={image} alt={alt && title} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}