import { useFragment, graphql, type SpriteInfo } from '$houdini'

export function Sprite({
  id,
  species,
  className,
  transparent
}: {
  species: SpriteInfo;
  id?: string;
  className?: string
 transparent?: boolean 
}) {
  const info = useFragment(species, graphql(`
      fragment SpriteInfo on Species {
          name
          sprites {
              front
          }
      }
  `))

  return (
    <div className={`sprite-container ${className ?? ''} ${transparent ? 'transparent': ''}`} id={id}>
      <img height="100%" src={info.sprites.front} alt={`${info.name} sprite`} />
    </div>
  );
}
