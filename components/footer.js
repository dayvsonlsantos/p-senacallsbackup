export default function Footer(){
    return(
        <footer className="w-full flex items-center justify-evenly flex-row py-4">
            <div className="w-12 h-12 flex items-center justify-center">
                <img className="h-7 w-7" src="/homeIcon.svg" alt="Icone de casa, indicando Home, na cor laranja" />
            </div>
            <div className="bg-senac-yellow-70 w-16 h-16 flex items-center justify-center rounded-full">
                <img className="h-7 w-7" src="/addIcon.svg" alt="Icone de +, indicando adicionar, na cor branca" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
                <img className="h-7 w-7" src="/userOrangeIcon.svg" alt="Icone de usuário, indicando usuário, na cor laranja" />
            </div>
        </footer>
    )
}