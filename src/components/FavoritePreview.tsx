import { useFragment, graphql, type FavoritePreview } from "$houdini";
import { Sprite } from ".";
import { Link } from 'react-router-dom'

export function FavoritePreview({ species }: { species: FavoritePreview }) {
  const data = useFragment(
    species,
    graphql(`
      fragment FavoritePreview on Species {
        id
        ...SpriteInfo
      }
    `)
  );

  return (
    <Link to={'/' + data.id.toString()} style={{ display: "flex", flexDirection: "column" }}>
      <Sprite species={data} transparent />
    </Link>
  );
}
