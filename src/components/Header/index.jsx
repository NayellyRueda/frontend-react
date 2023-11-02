import './styles.scss';
import LogoML from "../../assets/Logo_ML.png";
import ic_search from "../../assets/ic_search.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header(){
    const [inputValue, setInputValue] = useState('');
    const navigate =  useNavigate();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate({ pathname: "items", search: `?q=${inputValue}` });
        }
    };


    return (
        <header className="header">
            <img src={LogoML} alt='Logo image'/>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Nunca dejes de buscar" 
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={(e) => handleEnterKeyPress(e)}
                />
                <button>
                    <img src={ic_search} alt="Buscar"/>
                </button>
            </div>
        </header>
    )
};