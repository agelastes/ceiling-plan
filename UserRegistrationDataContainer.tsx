import React from 'react';
import {connect} from "react-redux";
import UserRegistrationData from "../UserRegistrationData";

type UserRegistrationDataProps = {
    setUserNameAndLastName: any
    setUserEmail: any
    setUserCompanyName: any
    setUserPassword: any
    setRememberedUserPassword: any
}

const UserRegistrationDataContainer: React.FC<UserRegistrationDataProps> = (props) => {
    const {setUserNameAndLastName, setUserEmail, setUserCompanyName, setUserPassword, setRememberedUserPassword} = props;
    return <UserRegistrationData setUserNameAndLastName={setUserNameAndLastName}
                                 setUserEmail={setUserEmail}
                                 setUserCompanyName={setUserCompanyName}
                                 setUserPassword={setUserPassword}
                                 setRememberedUserPassword={setRememberedUserPassword}/>
};

const mapStateToProps = (state: any) => ({reg_start: state.registration.reg_start, reg_successful: state.registration.reg_successful});

export default connect(mapStateToProps)(UserRegistrationDataContainer);
