export function SpeciesPreviewNumber({ value }: { value: number }) {
  const Is = Array.from({ length: value })
    .map(() => "I")
    .join("");

  return <div className="preview-number-container">{Is}</div>;
}
