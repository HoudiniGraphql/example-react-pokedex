import { Icon } from "./Icon";

export function DownButton({
  disabled,
  onClick,
}: {
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className="arrow-button" onClick={onClick} data-disabled={disabled}>
      <Icon name="ArrowDown" />
    </button>
  );
}
