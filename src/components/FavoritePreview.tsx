import { useFragment, graphql, type FavoritePreview } from "$houdini";
import { Sprite } from ".";

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
    <a href={data.id.toString()} style={{ display: "flex", flexDirection: "column" }}>
      <Sprite species={data} />
    </a>
  );
}
