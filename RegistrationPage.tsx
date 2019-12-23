import React, {MouseEvent, useEffect, useState} from 'react';
import new_logo from '../../../images/new-logo.png';
import './RegistrationPage.css';
import CheckAuthCode from "./CheckAuthCode/CheckAuthCode";
import UserRegistrationDataContainer from "./UserRegistrationData/UserRegistrationDataContainer/UserRegistrationDataContainer"
import ErrorMessageComponent from "../../ErrorMessageComponent/ErrorMessageComponent";
import WelcomePageContainer from "../../WelcomePage/WelcomePageContainer/WelcomePageContainer";
import {Link} from "react-router-dom";

type RegistrationProps = {
    reg_start: boolean,
    reg_successful: boolean,
    registrationStart: (userData: object) => object,
    registrationSuccessful: (userData: object) => object
}

const RegistrationPage: React.FC<RegistrationProps> = (props) => {

    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [authCode, setAuthCode] = useState<string>("");
    const [awaitAuthCode, setAwaitAuthCode] = useState<boolean>(false);
    const [userNameAndLastName, setUserNameAndLastName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [userCompanyName, setUserCompanyName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [rememberedUserPassword, setRememberedUserPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const {reg_start, reg_successful, registrationStart, registrationSuccessful} = props;

    useEffect(() => {
        if (userPassword !== rememberedUserPassword) setErrorMessage("Пароли не совпадают");
    }, [rememberedUserPassword, userPassword]);

    function setUserData() {
        if (authCode !== "") {
            const userData = {phoneNumber: phoneNumber, authCode: authCode};
            registrationStart(userData);
        }
        else setErrorMessage("Введите код авторизации");
    }

    function setNewUserData() {
        return {
            phone: phoneNumber,
            name: userNameAndLastName,
            email: userEmail,
            companyName: userCompanyName,
            password: userPassword
        };
    }

    function awaitAuthCodeModeTrue() {
        setAwaitAuthCode(true);
        setTimeout(() => alert("155511"), 5000)
    }

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if(reg_start) registrationSuccessful(setNewUserData());
        else if (awaitAuthCode) setUserData();
             else phoneNumber !== "" ? awaitAuthCodeModeTrue() : setErrorMessage("Введите номер телефона");
    }

    if (reg_successful) return <WelcomePageContainer />;
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
                    {!reg_start ?
                        <CheckAuthCode
                                awaitAuthCode={awaitAuthCode}
                                setAuthCode={setAuthCode}
                                setPhoneNumber={setPhoneNumber}
                                setErrorMessage={setErrorMessage} />
                    :   <UserRegistrationDataContainer
                                setUserNameAndLastName={setUserNameAndLastName}
                                setUserEmail={setUserEmail}
                                setUserCompanyName={setUserCompanyName}
                                setUserPassword={setUserPassword}
                                setRememberedUserPassword={setRememberedUserPassword}
                        />}
                    {errorMessage !== "" ? <ErrorMessageComponent errorMessage={errorMessage}/> : null}
                    <button className="btn wave right" onClick={handleClick}>
                        Продолжить
                    </button>
                    <Link to='/authorisation' className="ceiling-plan-link">Авторизация</Link>
                </form>
            </div>
    );
};

export default RegistrationPage;
