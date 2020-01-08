import React from "react";
import Link from "next/link";

const CharacterCard = ({ id, image, name, gender, status }) => {
  return (
    <div key={id}>
      <Link href={`/Character/[id]}`} as={`/Character/${id}`}>
        <a>
          <img src={image} />
        </a>
      </Link>
      <div> name : {name}</div>
      <div>gender :{gender}</div>
      <div> status :{status}</div>
    </div>
  );
};
export default CharacterCard;
