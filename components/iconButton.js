import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton(props) {
  const {
    className,
    icon,
    children,
    href,
    target,
    rel,
    onClick,
    style,
  } = props;
  if (href) {
    return (
      <a
        style={style}
        className={`button ${className}`}
        href={href}
        target={target}
        rel={rel}
      >
        <span className="icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span>{children}</span>
      </a>
    );
  }
  return (
    <button style={style} className={`button ${className}`} onClick={onClick}>
      <span className="icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span>{children}</span>
    </button>
  );
}
