import "./styles.scss";

export default function BackgroundContent({ children }) {
    return (
        <div className="background-container">
            {children}
        </div>
    )
};