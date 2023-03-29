import { Icon } from ".";

export function UpButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button className="arrow-button" onClick={onClick} data-disabled={disabled}>
      <Icon name="ArrowUp" />
    </button>
  );
}
