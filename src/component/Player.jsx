import { useState } from "react";

export default function Player({ intialName, symbol }) {
  const [palyerName, setPlayerName] = useState(intialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleName(event) {
    setPlayerName(event.target.value);
  }

  let playerName = <span className="player-name">{palyerName}</span>;
  //   let buttonCaption = 'Edit';

  if (isEditing) {
    playerName = (
      <input type="text" required value={palyerName} onChange={handleName} />
    );
    // buttonCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
