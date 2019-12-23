import React, {MouseEvent, useState} from 'react';
import new_logo from '../../../images/new-logo.png';
import './AuthorisationPage.css';
import {Link} from 'react-router-dom';
import {getPhoneWithoutMask, phoneMask} from "../../../utils/masks/phoneMasks";
import MaskedInput from "react-text-mask";

type AuthorisationPageProps = {
    auth: (userData: object) => object
}

const AuthorisationPage: React.FC<AuthorisationPageProps> = (props) => {
        const [phoneNumber, setPhoneNumber] = useState<string>("");
        const [userPassword, setUserPassword] = useState<string>("");
        const {auth} = props;

        function handleClick(event: MouseEvent<HTMLButtonElement>) {
            event.preventDefault();
            const userData = {phone: phoneNumber, password: userPassword};
            auth(userData);
        }

        return (
            <div className="Authorisation-page-container">
                <div className="Authorisation-header">
                    <img className="Authorisation-logo" src={new_logo} alt="Логусик"/>
                    <div className="Authorisation-title">
                        <h2>Ceiling</h2>
                        <h2>Plan</h2>
                    </div>
                </div>
                <form className="Auth-form">
                    <div className="group">
                        <MaskedInput type="text"
                                     value={phoneNumber}
                                     mask={phoneMask}
                                     onChange={(
                                         ev: React.ChangeEvent<HTMLInputElement>,
                                     ): void => setPhoneNumber(getPhoneWithoutMask(ev.target.value))}
                                     className="auth-input"
                                     required />
                        <span className="bar" />
                        <label>Номер телефона</label>
                    </div>
                    <div className="group">
                        <input type="password"
                               value={userPassword}
                               onChange={(
                                   ev: React.ChangeEvent<HTMLInputElement>,
                               ): void => setUserPassword(ev.target.value)}
                               className="auth-input"
                               required/>
                        <span className="bar" />
                        <label>Пароль</label>
                    </div>
                    <button className="btn wave right" onClick={handleClick}>
                        Продолжить
                    </button>
                    <Link to='/registration' className="ceiling-plan-link">Регистрация</Link>
                </form>
            </div>
        );
};

export default AuthorisationPage;
