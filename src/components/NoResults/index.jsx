import "./styles.scss";

export default function NoResults({ product }) {
    return (
        <div className="no-results">
            <p>No se encontraron resultados para esta búsqueda: "{product}"</p>
        </div>
    )
}