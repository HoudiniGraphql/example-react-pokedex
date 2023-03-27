import { Display } from ".";
import { SpeciesPreviewNumber } from "./SpeciesPreviewNumber";

export function SpeciesPreviewPlaceholder({ number }: { number: number }) {
  return (
    <div>
      <SpeciesPreviewNumber value={number} />
      <div className="sprite placeholder-background">
        <div className="poke-ball">
          <div className="poke-ball-top" />
          <div className="poke-ball-center" />
          <div className="poke-ball-bottom" />
        </div>
      </div>
      <Display>No Data</Display>
    </div>
  );
}
