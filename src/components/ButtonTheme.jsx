export default function ButtonTheme({icon = "moon", setIcon = () => {}}){
    return <i onClick={() => {
        setIcon(icon === "moon" ? "sun" : "moon")
    }} className={`far fa-${icon}`}></i>
}