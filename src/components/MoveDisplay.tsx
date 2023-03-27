import { Display } from ".";
import { useFragment, graphql, type MoveDisplay } from "$houdini";

export function MoveDisplay({ move }: { move: MoveDisplay }) {
  const data = useFragment(
    move,
    graphql`
      fragment MoveDisplay on SpeciesMove {
        learned_at
        method
        move {
          name
          accuracy
          power
          pp
          type
        }
      }
    `
  );

  const padValue = (val: number | null) => {
    if (val === null) {
      return "..0";
    }

    return (
      Array.from({ length: 3 - val.toString().length })
        .map(() => ".")
        .join("") + val
    );
  };

  const padKey = (val: string) => {
    return (
      val +
      Array.from({ length: 8 - val.toString().length })
        .map(() => ".")
        .join("")
    );
  };

  return (
    <Display id="move-display">
      <div>
        <h3>{data.move.name}</h3>
        <div className="move-display-stat">
          {padKey("Accuracy")}.....{padValue(data.move.accuracy)}
        </div>
        <div className="move-display-stat">
          {padKey("Power")}.....{padValue(data.move.power)}
        </div>
        <div className="move-display-stat">
          {padKey("PP")}.....{padValue(data.move.pp)}
        </div>
      </div>
      <div className="move-display-right-column">
        <div className="move-display-type-pill">Type: {data.move.type}</div>
        <div className="move-display-learn-data">
          Learn:
          {data.method === "level-up" ? `Lvl ${data.learned_at}` : "TM"}
        </div>
      </div>
    </Display>
  );
}
