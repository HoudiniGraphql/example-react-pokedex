import * as Feather from 'react-feather'

export function Icon({
  name,
  id,
  fill,
  className,
}: {
  name: string;
  fill?: string;
  id?: string;
  className?: string;
}) {
  // @ts-ignore
  const Target = Feather[name]
  return <Target height="1em" width="1em" id={id} fill={fill} className={className} />;
}
