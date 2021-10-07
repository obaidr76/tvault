import React, { useState, Component  } from "react";
import { useDispatch } from 'react-redux';
import { addState } from './redux/slice';

import "./css/CreateSafe.css";
import icon_safe from "./images/icon_safe.svg";


const CreateSafe = (props) => {

  const [inputSafeName, setSafeName] = useState();
  const [inputOwner, setOwner] = useState();
  const [inputType, setType] = useState();
  const [inputDesc, setDesc] = useState();

  const dispatch = useDispatch();
  const HandleChange = (e) =>{
    e.preventDefault();
    dispatch(
      addState({        
        SafeName: inputSafeName,
        Owner: inputOwner,
        Typeof: inputType,
        Desc: inputDesc,
      })
    );
    props.setTrigger(false);

  };


  return (
    <div className="popup">
      <form onSubmit={HandleChange}>
        <h2>Create Safe</h2>
        <div className="popup_desc">
          <img src={icon_safe} alt="safeImage"></img>
          <p>
            A Safe is a logical unit to store the secrets. All the safes are
            created within Vault. You can control access only at the safe level.
            As a vault administrator you can manage safes but cannot view the
            content of the safe.
          </p>
        </div>
        <div className="SafeInputs">
          <label>Safe Name</label>
          <input type="text" name="SafeName" placeholder="Cloud"  required
          value={inputSafeName} onChange={(e) => setSafeName(e.target.value)} />

          <label>Owner</label>
          <input type="text" name="Owner" placeholder="John Doe" required
          value={inputOwner} onChange={(e) => setOwner(e.target.value)}  />

          <label>Type</label>
          <select id="" name="Typeof" value={inputType} onChange={(e) => setType(e.target.value)} required
            >
            <option value="Personal" selected>Personal</option>
            <option value="Organisation">Organisation</option>
          </select>

          <label>Description</label>
          <textarea type="text" rows="4" name="Desc" placeholder="Add Some Details" required
          value={inputDesc} onChange={(e) => setDesc(e.target.value)} />
          <p>Please add a minimum of 10 characters</p>
        </div>
        <div className="popupbuttons">
          <button onClick={() => props.setTrigger(false)}>Cancel</button>
          <button type="submit">+ Create</button>
          {props.children}
        </div>
      </form>
    </div>
  );
};

export default CreateSafe;