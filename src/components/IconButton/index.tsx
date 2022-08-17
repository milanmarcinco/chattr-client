import cx from "classnames";
import styles from "./IconButton.module.scss";

interface IProps {
  icon: JSX.Element;
  onClick: (() => void) | undefined;
  enabled?: boolean;
}

const IconButton = ({ icon, onClick, enabled }: IProps) => (
  <button
    onClick={onClick}
    className={cx(styles.button, {
      [styles["button--enabled"]]: enabled,
    })}
    type="button"
  >
    {icon}
  </button>
);

export default IconButton;
