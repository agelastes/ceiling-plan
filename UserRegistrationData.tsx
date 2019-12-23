import React from 'react';
import './UserRegistrationData.css';

type UserRegistrationDataProps = {
    setUserNameAndLastName: any
    setUserEmail: any
    setUserCompanyName: any
    setUserPassword: any
    setRememberedUserPassword: any

}

function UserRegistrationData(props: UserRegistrationDataProps) {
    const {setUserNameAndLastName, setUserEmail, setUserCompanyName, setUserPassword, setRememberedUserPassword} = props;

    return (
            <form className="Auth-form">
                <div className="group">
                    <input type="text"
                           name="FIO"
                           onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setUserNameAndLastName(ev.target.value)}
                           className="auth-input"
                           required />
                    <label>Фамилия и имя<span> *</span></label>
                    <span className="bar" />
                </div>
                <div className="group">
                    <input type="text"
                           name="Email"
                           onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setUserEmail(ev.target.value)}
                           className="auth-input"
                           required/>
                    <label>Электронная почта</label>
                    <span className="bar" />
                </div>
                <div className="group">
                    <input type="text"
                           name="CompanyName"
                           onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setUserCompanyName(ev.target.value)}
                           className="auth-input"
                           required/>
                    <label>Название компании</label>
                    <span className="bar" />
                </div>
                <div className="group">
                    <input type="password"
                           name="Password"
                           onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setUserPassword(ev.target.value)}
                           className="auth-input"
                           required/>
                    <label>Придумайте пароль<span> *</span></label>
                    <span className="bar" />
                </div>
                <div className="group">
                    <input type="password"
                           name="RememberedPassword"
                           onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setRememberedUserPassword(ev.target.value)}
                           className="auth-input"
                           required/>
                    <label>Повторите пароль<span> *</span></label>
                    <span className="bar" />
                </div>
            </form>
    );
}

export default UserRegistrationData;
