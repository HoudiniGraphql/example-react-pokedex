import { graphql, useFragment, type SpeciesPreview } from "$houdini";
import { Sprite, Display } from ".";
import { SpeciesPreviewNumber } from "./SpeciesPreviewNumber";
import { Link } from "../router";

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
    <Link to={"/" + data?.id}>
      <SpeciesPreviewNumber value={number} />
      <Sprite species={data} className="preview-sprite" />
      <Display>{data?.name}</Display>
    </Link>
  );
}
