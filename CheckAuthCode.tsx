import React from 'react';
import './CheckAuthCode.css';
import {getPhoneWithoutMask, phoneMask} from "../../../../utils/masks/phoneMasks";
import MaskedInput from 'react-text-mask';

type RegistrationProps = {
    awaitAuthCode: boolean,
    setErrorMessage: any,
    setAuthCode: any,
    setPhoneNumber: any
}

function CheckAuthCode(props: RegistrationProps) {
    const {awaitAuthCode, setAuthCode, setPhoneNumber, setErrorMessage} = props;
    const handleChangeInputValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (ev.target.name === "phone") setPhoneNumber(getPhoneWithoutMask(ev.target.value));
        else setAuthCode(ev.target.value);
        setErrorMessage(false);
    };
    return (
            <div className="group">
                {!awaitAuthCode ? <MaskedInput type="text"
                                    mask={phoneMask}
                                    name="phone"
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => handleChangeInputValue(ev)}
                                    className="auth-input"
                                    required />
                            :     <input
                                     type="text"
                                     name="auth_code"
                                     onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => handleChangeInputValue(ev)}
                                     className="auth-input"
                                     required/>}
                    <span className="bar" />
                    <label>{!awaitAuthCode ? "Номер телефона" : "Код авторизации"}</label>
                </div>
    );
}

export default CheckAuthCode;
