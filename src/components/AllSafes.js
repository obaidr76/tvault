import React, {useState} from 'react';
import './css/AllSafes.css';
import CreateSafe from './CreateSafe';
//import childsafecards from './childsafecards';
import add1 from './images/Group12687.svg';
import addsafe from './images/Group12577.svg';
import shield from './images/icon_safes.svg';
import SafeCard from './SafeCard';
import { useSelector } from 'react-redux';




const AllSafes = ({setselectID}) => {
    const [CreateSafePopup, setCreateSafePopup] = useState(false);//hook1 default value sets true   
    const setAddFolderDiv = (value) =>{
        setselectID(value);
    }

    const todos = useSelector((state) => state.todos);

    return (
        <div className="allSafes">
            <div className="safesearch">                
                <h2>All-Safes <span className="changecolor">({todos.length})</span></h2>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
                <div className="searchbox">
                    <input className="safeinput" type="text" placeholder="Search"/>
                </div>
            </div>
            {todos.length == 0 && (
            <div className="firstsafe">
                <img src={add1} alt="logo"/>
                <h4>Create a Safe to get started</h4>
                <img src={addsafe} alt="logo" onClick={() => setCreateSafePopup(true)}/>
            </div>
            )}

            {todos.length !== 0 && (

            <div className="Afterfirstsafe">
                {todos.map((todo) => {
                    return(
                    <div className="innerCardContainer" onClick={() => setAddFolderDiv(todo.id)}>
                        <SafeCard id = {todo.id} Owner = {todo.Owner} Date = {todo.Date} Typeof = {todo.Typeof} SafeName = {todo.SafeName}/>   
                    </div>
                );
            })}
                <img className="AddbuttonSafe" src={addsafe} alt="logo" onClick={() => setCreateSafePopup(true)}/>
            </div>
            
            )}
            {CreateSafePopup &&(
            <CreateSafe setTrigger={setCreateSafePopup}>
                {/* <h2>yes worked</h2> */}
            </CreateSafe>
            )}
            
        </div>
    );

};

export default AllSafes;