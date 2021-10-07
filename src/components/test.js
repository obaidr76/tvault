import React, { useState, useEffect } from "react";
import "./css/AllSafes.css";
import CreateSafe from "./CreateSafe";
import CreateSafeCard from "./CreateSafeCard";
import CreateSafeList from "./CreateSafeList";
import downBtn from "./images/icon_arrow_white.svg";
import searchIcon from "./images/icon_search.svg";
import assetsIcon from "./images/g1.svg";
import createNewSafeIcon from "./images/add.svg";
import InfoCard from "./InfoCard";

function AllSafes() {
  const [CreateSafePopup, setCreateSafePopup] = useState(false);
  const [CreateSafedetails, setCreateSafedetails] = useState([]);
  const [inputArrPrent, setInputArrPrent] = useState([]);
  const [allSafeLength, setAllSafeLength] = useState(0);

  const changeHandler = (item) => {
    // console.log("inputListPrent inside change hadler", item);
    // console.log(item[0]);
    const tempArr = [];
    // tempArr.push(item);
    // console.log(inputArrPrent, tempArr);
    setInputArrPrent([...inputArrPrent, item]);
    // consosle.log("inputArrPrent",inputArrPrent);
    // setInputArrPrent(tempArr);
  };

  useEffect(() => {
    console.log("inside use effecttttt inputArrPrent");
    setAllSafeLength(inputArrPrent.length);
  }, [inputArrPrent]);

  return (
    <div className="allSafes">
      <div className="topSection">
        <div className="topSectionLeft">
          <span className="safesCount">All Safes ({allSafeLength})</span>
          <img className="downBtnClass" src={downBtn}></img>
        </div>
        <div className="topSectionRight">
          <img src={searchIcon} className="searchIcon"></img>
          <input type="text" id="searchBar" placeholder="Search"></input>
        </div>
      </div>
      {CreateSafePopup && (
        <CreateSafe
          setTrigger={setCreateSafePopup}
          callbackFun={changeHandler}
        />
      )}

      {/* display when size is 0  */}
      {!inputArrPrent.length && (
        <div className="emptyDiv">
          <img src={assetsIcon} id="assestImg"></img>
          {/* <img scr={createNewSafeIcon}></img> */}
          <button onClick={() => setCreateSafePopup(true)} id="createNewBtn">
            +<span className="onHoverShowText">Create New Safe</span>
          </button>
        </div>
      )}

      {/* display after entring values */}
      <div className="items-btn-wrap">
        <div className="items-wrap">
        {inputArrPrent?.map((obj) => {
          return (
            <div key={obj.Owner} className="items">
              <ul id="infoCard-ul">
                <InfoCard info={obj} />
              </ul>
            </div>
          );
        })}
        </div>
        <button onClick={() => setCreateSafePopup(true)} id="createNewBtn-2">
          +<span className="onHoverShowText-2">Create New Safe</span>
        </button>
      </div>
    </div>
  );
}
export default AllSafes;




<label>Safe Name</label>
<input type="text" name="SafeName" placeholder="Cloud"  required
value={findID} onChange={(e) => setSafeName(e.target.value)}/>

<label>Owner</label>
<input type="text" name="Owner" placeholder="John Doe" required
value={inputOwner} onChange={(e) => setOwner(e.target.value)}/>

<label>Type</label>
<select id="" name="Typeof" value={inputType} required onChange={(e) => setType(e.target.value)}>
  <option value="Personal" selected>Personal</option>
  <option value="Organisation">Organisation</option>
</select>

<label>Description</label>
<textarea type="text" rows="4" name="Desc" placeholder="Add Some Details" required
value={inputDesc} onChange={(e) => setDesc(e.target.value)}/>
<p>Please add a minimum of 10 characters</p>




);
};
})}



{
  ...s,
  secrets: [...s.secrets, { ...action.payload, added: new Date() }],
  updated: new Date(),
}









const updatedState = state.filter((contact) =>
            contact.id === action.payload.id ? 
            Object.assign(contact, [contact.Folder, { ...action.payload.Folder}]) : contact );
            state = updatedState;