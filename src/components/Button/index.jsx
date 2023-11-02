import "./styles.scss";

export default function Button({ text, width }) {
    const buttonStyles = {
        width: width,
    };

    return (
        <button className="primary-button" style={buttonStyles}>
            <p className="button-text">{text}</p>
        </button>
    )
};