import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import doc1 from '../../assets/images/doc1.png';
import person1 from '../../assets/images/person1.png';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <div className="header">
            <div className="rightHead">
                <div className="rightHead-1">
                    <img src={logo} className="logo" alt="logo"/>
                    <h2>T-VAULT</h2>
                </div>
                <div className="rightHead-2">
                    <ul className="rightHead-list">
                        <li><Link className="link-CSS" to ="/">Safes</Link></li>
                        <li><Link className="link-CSS" to ="/vaultrole">Vault AppRoles</Link></li>
                        <li><Link className="link-CSS" to ="/ServiceAcc">Service Accounts</Link></li>
                        <li><Link className="link-CSS" to ="/IAMServiceAcc">IAM Service Accounts</Link></li>
                        <li><Link className="link-CSS" to ="/AzureAD">Azure Active Directory</Link></li>
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