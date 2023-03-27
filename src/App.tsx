import { useQueryHandle, useMutation, graphql } from "$houdini";
import { useParams } from "react-router-dom";
import {
  Container,
  Display,
  DownButton,
  FavoritePreview,
  FavoritesContainer,
  Icon,
  MoveDisplay,
  SpeciesPreview,
  SpeciesPreviewPlaceholder,
  Sprite,
  UpButton,
} from "./components";

function App() {
  // grab the id url parameter
  const { id } = useParams();

  const { data, pageInfo, loadNext, loadPrevious } = useQueryHandle(
    graphql(`
      query Info($id: Int = 1) {
        species(id: $id) {
          id
          name
          flavor_text
          favorite

          evolution_chain {
            id
            ...SpeciesPreview
          }

          moves(first: 1) @paginate(mode: SinglePage) {
            edges {
              node {
                ...MoveDisplay
              }
            }
          }

          ...SpriteInfo
        }

        favorites @list(name: "FavoriteSpecies") {
          id
          ...FavoritePreview
        }
      }
    `),
    {
      id: parseInt(id ?? "1"),
    }
  );

  const [, toggleFavorite] = useMutation(
    graphql(`
      mutation ToggleFavorite($id: Int!) {
        toggleFavorite(id: $id) {
          species {
            id
            favorite
            ...FavoriteSpecies_toggle
          }
        }
      }
    `)
  );

  if (!data.species) {
    return <div>not found</div>;
  }

  return (
    <>
      <FavoritesContainer>
        {data.favorites.length === 0 ? (
          <p>No Favorites Selected</p>
        ) : (
          data.favorites.map((favorite) => (
            <FavoritePreview species={favorite} key={favorite.id} />
          ))
        )}
      </FavoritesContainer>
      <Container
        left={
          <>
            <Display className="species-name">
              {data.species.name}
              <span>no.{data.species.id}</span>
            </Display>
            <Sprite className="species-sprite" species={data.species} />
            <Display className="species-flavor_text">
              {data.species.flavor_text}
            </Display>
            <button
              className="favorite"
              onClick={() =>
                toggleFavorite({ variables: { id: data.species!.id } })
              }
            >
              <Icon
                name="Star"
                className="favorite-star"
                fill={data.species.favorite ? "gold" : "lightgrey"}
              />
            </button>
          </>
        }
        right={
          <>
            <div className="species-evolution-chain">
              {data.species.evolution_chain.map((form, i) => (
                <SpeciesPreview species={form} number={i + 1} key={form.id} />
              ))}
              {/* if there are less than three species in the chain, leave a placeholder behind */}
              {Array.from({
                length: 3 - data.species.evolution_chain?.length,
              }).map((_, i) => (
                <SpeciesPreviewPlaceholder
                  key={i}
                  number={data.species!.evolution_chain.length + i + 1}
                />
              ))}
            </div>
            <div className="move-summary">
              <MoveDisplay move={data.species.moves.edges[0].node} />
              <div className="move-controls">
                <UpButton
                  disabled={!pageInfo.hasPreviousPage}
                  onClick={loadPrevious}
                />
                <DownButton
                  disabled={!pageInfo.hasNextPage}
                  onClick={loadNext}
                />
              </div>
            </div>
            <nav>
              <a
                href={data.species.id <= 1 ? "/1" : "/" + (data.species.id - 1)}
                data-disabled={data.species.id <= 1}
              >
                previous
              </a>
              <a
                href={
                  data.species.id >= 151 ? "150" : "/" + (data.species.id + 1)
                }
                data-disabled={data.species.id >= 151}
              >
                next
              </a>
            </nav>
          </>
        }
      />
    </>
  );
}

export default App;
