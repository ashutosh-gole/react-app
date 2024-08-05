import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpannded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpannded ? children : children.substring(0, maxChars);
  return (
    <p>
      {isExpannded ? text : text + "..."}
      &nbsp;&nbsp;
      <button onClick={() => setIsExpanded(!isExpannded)}>
        {isExpannded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
