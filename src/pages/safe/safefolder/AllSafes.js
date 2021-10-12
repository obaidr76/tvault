import React, {useState, useRef} from 'react';
import './AllSafes.css';
import CreateSafe from '../../../modal/CreateSafe';
//import childsafecards from './childsafecards';
import add1 from '../../../assets/images/Group12687.svg';
import addsafe from '../../../assets/images/Group12577.svg';
import SafeCard from '../safefolder/SafeCard';
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
        <div className="allSafes" >
            <div className="safesearch">                
                <h4>All-Safes <span className="changecolor">({todos.length})</span></h4>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
                <input type="text" className="safeinput" placeholder="Search" value={query} onChange={(e) => setQuery(e.currentTarget.value)} / >
            </div>
            {todos.length == 0 && !query && (
            <div className="firstsafe" style={{backgroundImage: "url(" + add1 + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                <h4 className="safeh4" >Create a Safe to get started</h4>
                <img className="imgh4" src={addsafe} alt="logo" onClick={() => setCreateSafePopup(true)}/>
            </div>
            )}

            {todos.length !== 0 && !query && (
            <div className="Afterfirstsafe">
                <div className="afteritems">
                {todos.map((todo) => {
                    return(
                    <div id="innerCardContainer" onClick={() => setAddFolderDiv(todo.id)} className={activeDIV === todo.id? "activecheck": null}>
                        <SafeCard id = {todo.id} Owner = {todo.Owner} Date = {todo.Date} Typeof = {todo.Typeof} SafeName = {todo.SafeName}/>   
                    </div>
                );
            })}
                </div>
                <img className="AddbuttonSafe" src={addsafe} alt="logo" onClick={() => setCreateSafePopup(true)}/>
            </div>
            
            )}

            {filteredSafes.length === 0 && query && (
                <div className="Afterfirstsafe2">
                    <div id="innerCardContainer">
                        <p>No Safe Found!</p>
                    </div>
                </div>
            )}
            {filteredSafes && query && (
                <div className="Afterfirstsafe2">
                {filteredSafes.map((todo) => {
                        return(
                        <div id="innerCardContainer" onClick={() => setAddFolderDiv(todo.id)}>
                            <SafeCard id = {todo.id} Owner = {todo.Owner} Date = {todo.Date} Typeof = {todo.Typeof} SafeName = {todo.SafeName}/>   
                        </div>
                    );
                })}
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