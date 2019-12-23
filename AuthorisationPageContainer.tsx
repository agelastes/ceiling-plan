import React from 'react';
import {connect} from "react-redux";
import {userAuth} from "../../../../AC/authorisation";
import AuthorisationPage from "../AuthorisationPage";

type AuthorisationPageContainerProps = {
    auth: (userData: object) => any
}

const AuthorisationPageContainer: React.FC<AuthorisationPageContainerProps> = (props) => {
    const {auth} = props;
    return <AuthorisationPage auth={auth} />
};

const mapDispatchToProps = {auth: userAuth};

export default connect(null, mapDispatchToProps)(AuthorisationPageContainer);
