import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { EditState } from '../redux/action/slice';
import "./CreateSafe.css";
import icon_safe from "../assets/images/icon_safe.svg";
import { useSelector } from 'react-redux';
import OutsideClickHandler from "react-outside-click-handler";


const EditSafeCard = (props) => {

  const todos = useSelector(state => state.todos);

  const currentsafe = todos.find((todo) => todo.id === props.id);

  const [inputSafeName, setSafeName] = useState([currentsafe.SafeName]);
  const [inputOwner, setOwner] = useState([currentsafe.Owner]);
  const [inputType, setType] = useState("Personal");
  const [inputDesc, setDesc] = useState([currentsafe.Desc]);


  let findID = props.id;

  const dispatch = useDispatch();
  const HandleChange = (e) =>{
    e.preventDefault();
    if(inputDesc.length < 10) {
      alert("Enter more characters");
    }
     else{ 
    dispatch(
      EditState({
        id: findID,
        SafeName: inputSafeName,
        Owner: inputOwner,
        Typeof: inputType,
        Desc: inputDesc,
      })
    );
    props.setTrigger(false);
    };

  };

    

  return (
          <div className="popup">
            
      <OutsideClickHandler
        onOutsideClick={() => {
          props.setTrigger(false);
        }}
      >
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
            {/*}
            {todos.map((search) => {
                if(search.id === findID){
                return(  */}
                  <div className="SafeInputs">                    
                    <label>Safe Name</label>
                    <input type="text" name="SafeName" required
                    value={inputSafeName} onChange={(e) => setSafeName(e.target.value)}/>

                    <label>Owner</label>
                    <input type="text" name="Owner" required
                    value={inputOwner} onChange={(e) => setOwner(e.target.value)}/>

                    <label>Type</label>
                    <select id="" name="Typeof" value={inputType} required onChange={(e) => setType(e.target.value)}>
                      <option value="Personal" selected>Personal</option>
                      <option value="Organisation">Organisation</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Shared">Shared</option>
                      <option value="Associates">Associates</option>
                    </select>

                    <label>Description</label>
                    <textarea type="text" rows="4" name="Desc" required
                    value={inputDesc} onChange={(e) => setDesc(e.target.value)} pattern=".{10,40}"/>
                    <p>Please input atleast 10 Characters.</p>
                  </div>
                
              <div className="popupbuttons">
                <button onClick={() => props.setTrigger(false)}>Cancel</button>
                <button type="submit">+ Create</button>
                {props.children}
              </div>
            </form>
            
      </OutsideClickHandler>
    </div>
  );
  };    

export default EditSafeCard;