import * as Feather from "react-feather";

export function Icon({ name }: { name: string }) {
  const Target = Feather[name];

  return <Target />;
}
