import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <Button variant="outlined" size="small" color="primary" onClick={() => loginWithRedirect()}>
                Login
            </Button>
        )
    )
}

export default LoginButton;