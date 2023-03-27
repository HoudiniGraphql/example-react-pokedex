import * as React from "react";

export function FavoritesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="favorites-container">
      <h2 className="favoritesTitle">Favorites</h2>
      <div>{children}</div>
    </div>
  );
}
