import { tagColor } from "../helpers";
import type { TTag } from "../types";

type TTagItemProps = {
  tag: TTag;
};

export default function TagItem({ tag }: TTagItemProps) {
  return (
    <span className="uppercase px-3 py-0.5 rounded-2xl font-bold" style={{ backgroundColor: tagColor(tag) }}>
      {tag}
    </span>
  );
}
