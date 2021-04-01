import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Button variant="outlined" size="small" color="primary" onClick={() => logout()}>
                Logout
            </Button>
        )
    )
}

export default Logout;