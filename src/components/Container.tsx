import * as React from "react";

export function Container({
  left,
  right,
}: {
  left?: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="pokedex">
      <div className="left-panel panel">{left}</div>
      <div className="middle-panel panel">
        <div className="divider">
          <div className="gap" />
          <div className="hinge" />
          <div className="gap" />
          <div className="hinge" />
          <div className="gap" />
          <div className="hinge" />
          <div className="gap" />
        </div>
      </div>
      <div className="right-panel panel">{right}</div>
      <div>
        <div className="ball-highlight" />
        <div className="ball" />
        <div className="highlights">
          <div className="highlight" />
          <div className="highlight" />
          <div className="highlight" />
        </div>
        <div className="light-container">
          <div className="red-light light" />
          <div className="yellow-light light" />
          <div className="green-light light" />
        </div>
        <div className="left-header" />
        <div className="left-cap" />
        <div className="left-cap-border" />
        <div className="left-cap-shadow" />
        <div className="right-cap" />
        <div className="right-cap-shadow" />
        <div className="outer-line" />
        <div className="border-spacing" />
        <div className="inner-border" />
        <div className="top-left-corner corner" />
        <div className="middle-corner corner" />
        <div className="bottom-right-corner corner" />
        <div className="bottom-left-corner corner" />
        <div className="right-panel-shadow" />
        <div className="background" />
      </div>
    </div>
  );
}
