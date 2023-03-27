import { graphql, useFragment, type SpeciesPreview } from "$houdini";
import { Sprite, Display } from ".";
import { SpeciesPreviewNumber } from "./SpeciesPreviewNumber";

export function SpeciesPreview({
  species,
  number,
}: {
  species: SpeciesPreview;
  number: number;
}) {
  const data = useFragment(
    species,
    graphql(`
      fragment SpeciesPreview on Species {
        name
        id
        ...SpriteInfo
      }
    `)
  );

  return (
    <a href={data.id}>
      <SpeciesPreviewNumber value={number} />
      <Sprite species={species} class="preview-sprite" />
      <Display>{data.name}</Display>
    </a>
  );
}
