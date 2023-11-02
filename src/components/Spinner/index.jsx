import "./styles.scss";

export default function Spinner(){
    return(
        <div className="spinner-container">
            <div className="spinner" />
            <p className="loading-text">Cargando...</p>
        </div>
    )
};