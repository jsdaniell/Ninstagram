import "./buttonRoundedStyle.css"

export default function ButtonRounded({ text = "Padrão"}) {
    return (
        <button className="buttonStyle">
            {text}
        </button>
    )
}