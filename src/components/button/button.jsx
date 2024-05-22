const Button = ({ href, titulo, icon: Icon }) => {
    return (
        <a target="_blank" className="buttons encodesans-bold" href={href}>
            <span className="icon">
                {Icon && <Icon />}
            </span>
            <span className="title">
                {titulo}
            </span>
        </a>
    );
};

export default Button;
