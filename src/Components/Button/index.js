import "./styles.css";

function Button({
  children,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  borderRadius,
  padding,
  href
}) {
  return (
      <a className="link" href={href} style={{color, backgroundColor, borderRadius}}>
        <button
        className="button"
        style={{
          fontSize,
          fontWeight,
          color,
          padding
        }}>
          {children}
        </button>
        </a>
    
  );
}

export default Button;
