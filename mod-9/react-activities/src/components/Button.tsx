interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
}

function Button({ text, type = 'button', onClick, disabled }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;