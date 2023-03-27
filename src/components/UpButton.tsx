import { Icon } from ".";

export function UpButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button className="arrow-button" onClick={onClick} disabled={disabled}>
      <Icon name="arrow-up" />
    </button>
  );
}
