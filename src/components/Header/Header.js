import React, {useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import doc1 from '../../assets/images/doc1.png';
import person1 from '../../assets/images/person1.png';
import { Link } from 'react-router-dom';

const Header = () =>{
    const [clickedActiveId, setClickedActiveId] = useState();
    const linkmap =[{ id: 1, name:"Safes",path:''},
    { id: 2, name:"App VaultRoles",path:'VaultRole'},
    { id: 3, name:"Service Acc.",path:'ServiceAcc'},
    { id: 4, name:"IAM Service Acc.",path:'IAMServiceAcc'},
    { id: 5, name:"Azure AD",path:'AzureAD'}];
    const handleClick = (id) => {
        setClickedActiveId(id);
      };
    return (
        <div className="header">
            <div className="rightHead">
                <div className="rightHead-1">
                    <img src={logo} className="logo" alt="logo"/>
                    <h2>T-VAULT</h2>
                </div>
                <div className="rightHead-2">
                    <ul className="rightHead-list">
                {linkmap.map((item) => {
                    console.log(item);
                    return (
                            <div className="lihover" onClick={() => handleClick(item.id)} id={clickedActiveId == item.id ? "liactive" : null} key={item.id}>
                            <Link className="link-CSS" to ={`/${item.path}?name=obaid&age=10`}><li className="link-CSS">{item.name}</li></Link>
                            </div>
                    
                    );
                    })}
                    </ul>
                </div>
            </div>
            <div className="leftHead">
                    <img src={doc1} className="logo2" alt="logo"/>
                <div className="lH1">Documentation</div>
                    <img src={person1} className="logo2" alt="logo"/>
                <div className="lH2">(Admin) Davis R.</div>
            </div>
        </div>
    );
};
export default Header;