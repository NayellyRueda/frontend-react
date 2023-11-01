import "./styles.scss";

export default function BackgroundContent({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    )
};