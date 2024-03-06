export default function ButtonMenu({ 
    text = "Valor Padrão", 
    selectedMenu = 1, 
    indexMenu = 1,
    changeMenu = () => {},
    logoutButton = false
 }){
    return <div onClick={() => {
        changeMenu(indexMenu)
    }} className={`nonSelectedMenuButton ${selectedMenu === indexMenu ? "selectedButton" : ""} ${logoutButton ? "exitButton" : ""}`}>
      {text}
    </div>
}