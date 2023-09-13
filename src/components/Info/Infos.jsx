import React from "react";

const Infos = ({ player }) => {
  return (
    <>
      <div>
        <ol>
          <li className="text-xl text-white">{player}</li>
        </ol>
      </div>
    </>
  );
};

export default Infos;
