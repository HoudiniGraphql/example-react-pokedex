export function Sprite({
  id,
  src,
  speciesName,
}: {
  id?: string;
  src: string;
  speciesName: string;
}) {
  return (
    <div className="sprite-container" id={id}>
      <img height="100%" src={src} alt={`${speciesName} sprite`} />
    </div>
  );
}
