import React, { useState, Component  } from "react";
import { useDispatch } from 'react-redux';
import { EditFolderState } from '../redux/action/slice';
import "./CreateSafe.css";
import OutsideClickHandler from "react-outside-click-handler";

const CreateFolder = (props) => {
  const ElementID = props.id;
  const dispatch = useDispatch();
  const newSecret = { name: "" };
  const [secret, setSecret] = useState(newSecret);

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.currentTarget;
    const updatedSecret = { ...secret, [id]: value };
    setSecret(updatedSecret);
  };
  
const handleAdd = (e) => {
  e.preventDefault();
  dispatch(EditFolderState({ElementID, secret}));
  props.setTrigger(false);
};

  return (
    
      <div className="popupFolder">
      <OutsideClickHandler
        onOutsideClick={() => {
          props.setTrigger(false);
        }}
      >
        <form className="folderform">
          <h2>Create Folder</h2>
          <div className="SafeInputs">
            <label>Folder Name</label>
            <input type="text" name="Folder"id="name" value={secret.name} onChange={handleChange} required/>
          </div>
          <div className="popupbuttons">
            <button onClick={() => props.setTrigger(false)}>Cancel</button>
            <button type="submit" onClick={handleAdd}>+ Create</button>
            {props.children}
          </div>
        </form>
      </OutsideClickHandler>
      </div>
  );
};

export default CreateFolder;