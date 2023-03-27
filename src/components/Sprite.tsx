import { useFragment, graphql, type SpriteInfo } from '$houdini'

export function Sprite({
  id,
  species,
  className,
}: {
  species: SpriteInfo;
  id?: string;
  className?: string
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
    <div className={`sprite-container ${className}`} id={id}>
      <img height="100%" src={info.sprites.front} alt={`${info.name} sprite`} />
    </div>
  );
}
