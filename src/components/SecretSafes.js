import './css/SecretSafes.css';
import banner from './images/Banner_img.svg';
import folderAddicon from './images/icon_addfolder_inactive.svg';
import addicon from './images/icon_add.svg';
import CreateFolder from './CreateFolder';
import FolderCard from './FolderCard';
import React, {useState, Component } from 'react';
import { useDispatch, useSelector } from "react-redux";
import foldericon from './images/icon_folder.svg';


const SecretSafes = ({selectID}) =>{

    const [EditSafePopup, setEditSafePopup] = useState(false); 
    const todos = useSelector((state) => state.todos);
    const currentsafe = todos.find((todo) => todo.id === selectID);
    const secrets = currentsafe ? currentsafe.Folder : null;
    return(

        <div className="SecrectSafes">
            
            {!selectID && (
            <div className="SafeBanner" style={{
          backgroundImage: "url(" + banner + ")",
          backgroundRepeat: "no-repeat",
        }}><span id="safeName">No safes created yet!</span>
            <span id="safeDescription">
               Create a safe to see your secrets, folder and permissions here.
                </span>
            </div>

            )}
            {selectID && (
                <div className="SafeBanner" style={{
              backgroundImage: "url(" + banner + ")",
              backgroundRepeat: "no-repeat",
            }}><span id="safeName">Sample / SafeName</span>
                <span id="safeDescription">
                    A Safe is a logical unit to store the secrets. All the safes are
                    created within Vault. You can control access only at the safe level.
                    As a vault administrator you can manage safes but cannot view the
                    content of the safe.
                    </span>
                </div>
    
                )}

            <div className="DisplaySafe">
                <div className="DisplaySafe-buttons">
                    <div className="DisplayRight">
                        <a>Secrets</a>
                    </div>
                    
                    {!selectID && (
                    <div className="DisplayLeft">
                        <a>Add Folder</a>
                        <img src={folderAddicon} className="logo3" alt="logo"/>
                    </div>
                    )}
                    {selectID && (
                    <div className="DisplayLeft" onClick={() => setEditSafePopup(true)} >
                        <a>Add Folder</a>
                        <img src={folderAddicon} className="logo3" alt="logo"/>     
                    </div>                   
                    )}       
                </div>
                <div className="DisplaySafe-SafeArea">                    
                    {secrets && (
                    <div className="folderContainer">                        
                        {secrets.map((itemvalue) => {
                            console.log(itemvalue);
                            return(
                                <div className="foldercardparent">
                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                    <img src={foldericon} alt="logo"/>
                                    <div className="foldercard">
                                        <h2> {itemvalue} </h2>
                                    </div>
                                </div>
                        );
                    })}
                    </div>
                    )}
                </div>

            </div>

            {EditSafePopup &&(
            <CreateFolder id={selectID} setTrigger={setEditSafePopup}>
                {/* <h2>yes worked</h2> */}
            </CreateFolder>
            )}

        </div>
    );
};

export default SecretSafes;