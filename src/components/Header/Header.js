import React, {useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import doc1 from '../../assets/images/doc1.png';
import person1 from '../../assets/images/person1.png';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";


const Header = () =>{
    const navpath = useLocation().pathname.substr(1,);
    //let query = new URLSearchParams(useLocation().search);

    //console.log(navpath);

    const linkmap =[{name:"Safes",path:'tvault'},
    {name:"App VaultRoles",path:'VaultRole'},
    {name:"Service Acc.",path:'ServiceAcc'},
    {name:"IAM Service Acc.",path:'IAMServiceAcc'},
    {name:"Azure AD",path:'AzureAD'}];

    return (
        <header>
            <div className="rightHead">
                <div className="rightHead-1">
                    <img src={logo} className="logo" alt="logo"/>
                    <h2>T-VAULT</h2>
                </div>
                <div className="rightHead-2">
                    <ul className="rightHead-list">
                {linkmap.map((item) => {
                    return (
                            <div className="lihover" id={navpath === item.path ? "liactive" : null} key={item.path}>
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
        </header>
    );
};
export default Header;