import './styles.scss';
import LogoML from "../../assets/Logo_ML.png";
import ic_search from "../../assets/ic_search.png";

export default function Header(){
    return (
        <header className="header">
            <img src={LogoML} alt='Logo image'/>
            <div className="search-bar">
                <input type="text" placeholder="Nunca dejes de buscar" />
                <button>
                    <img src={ic_search} alt="Buscar"/>
                </button>
            </div>
        </header>
    )
};