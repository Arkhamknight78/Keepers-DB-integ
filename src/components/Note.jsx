import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



function Note(props) {
  return (
    <div className="note">
    {/* <h1>{props.id}</h1> */}
      <h1>{props.Title}</h1>
      <p>{props.Content}</p>
      <button
        onClick={(event) => {
          props.onDel(props.id);
        }}
      >
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
