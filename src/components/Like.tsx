import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onIconClick: (status: boolean) => void;
}

const Like = ({ onIconClick }: Props) => {
  const [status, setStatus] = useState(false);
  const handlerToggele = () => {
    setStatus(!status);
    onIconClick(status);
  };

  return (
    <>
      <h1>Like Component Example with react icons</h1>
      <p>
        way of calling handlerToggele function is also diff - used 2 diff
        methods below in onClick
      </p>
      {status ? (
        <AiFillHeart size={81} color="red" onClick={() => handlerToggele()} />
      ) : (
        <AiOutlineHeart size={81} color="red" onClick={handlerToggele} />
      )}
    </>
  );
};

export default Like;
