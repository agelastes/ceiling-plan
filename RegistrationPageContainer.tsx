import React from 'react';
import {connect} from "react-redux";
import {registrationStart, registrationSuccessful} from "../../../../AC/registration";
import RegistrationPage from "../RegistrationPage";

type RegistrationProps = {
    reg_start: boolean,
    reg_successful: boolean,
    registrationStart: (userData: object) => object,
    registrationSuccessful: (userData: object) => object,
}

const RegistrationPageContainer: React.FC<RegistrationProps> = (props) => {
    const {reg_start, reg_successful, registrationStart, registrationSuccessful} = props;
    return <RegistrationPage
                reg_start={reg_start}
                reg_successful={reg_successful}
                registrationStart={registrationStart}
                registrationSuccessful={registrationSuccessful}/>
};

const mapStateToProps = (state: any) => ({reg_start: state.registration.reg_start, reg_successful: state.registration.reg_successful});
const mapDispatchToProps = {registrationStart: registrationStart, registrationSuccessful: registrationSuccessful};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPageContainer);
