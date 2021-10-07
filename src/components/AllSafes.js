import React, {useState, useRef} from 'react';
import './css/AllSafes.css';
import CreateSafe from './CreateSafe';
//import childsafecards from './childsafecards';
import add1 from './images/Group12687.svg';
import addsafe from './images/Group12577.svg';
import shield from './images/icon_safes.svg';
import SafeCard from './SafeCard';
import { useSelector } from 'react-redux';

const AllSafes = ({setselectID}) => {

    const [activeDIV, setactiveDIV] = useState(false);
    const [CreateSafePopup, setCreateSafePopup] = useState(false);//hook1 default value sets true   
    const setAddFolderDiv = (value) =>{
        setselectID(value);
        setactiveDIV(value);
    }

    const todos = useSelector((state) => state.todos);
    const [query, setQuery] = useState("");
    const ForFiltertodos = useSelector((state) => state.todos);
    const valueregex = new RegExp(`\\b${query}`);
    const filteredSafes = ForFiltertodos.filter((todo) => valueregex.test(todo.SafeName));

    return (
        <div className="allSafes">
            <div className="safesearch">                
                <h3>All-Safes <span className="changecolor">({todos.length})</span></h3>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
                <div className="searchbox">
                    <input type="text" className="safeinput" placeholder="Search" value={query} onChange={(e) => setQuery(e.currentTarget.value)} / >
                </div>
            </div>
            {todos.length == 0 && (
            <div className="firstsafe">
                <img src={add1} alt="logo"/>
                <h4>Create a Safe to get started</h4>
                <img src={addsafe} alt="logo" onClick={() => setCreateSafePopup(true)}/>
            </div>
            )}

            {todos.length !== 0 && !query && (
            <div className="Afterfirstsafe">
                {todos.map((todo) => {
                    return(
                    <div id="innerCardContainer" onClick={() => setAddFolderDiv(todo.id)} className={activeDIV === todo.id? "activecheck": null}>
                        <SafeCard id = {todo.id} Owner = {todo.Owner} Date = {todo.Date} Typeof = {todo.Typeof} SafeName = {todo.SafeName}/>   
                    </div>
                );
            })}
                <img className="AddbuttonSafe" src={addsafe} alt="logo" onClick={() => setCreateSafePopup(true)}/>
            </div>
            
            )}

            {filteredSafes && query && (
                <div className="Afterfirstsafe">
                {filteredSafes.map((todo) => {
                        return(
                        <div id="innerCardContainer" onClick={() => setAddFolderDiv(todo.id)}>
                            <SafeCard id = {todo.id} Owner = {todo.Owner} Date = {todo.Date} Typeof = {todo.Typeof} SafeName = {todo.SafeName}/>   
                        </div>
                    );
                })}
                </div>
            )}
            {filteredSafes.length === 0 && query && (
                <div className="Afterfirstsafe">
                    <div id="innerCardContainer">
                        <p>No Safe Found!</p>
                    </div>
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