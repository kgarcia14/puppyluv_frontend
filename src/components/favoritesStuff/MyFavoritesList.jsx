import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const MyFavoritesList = ({favoriteUsers}) => {

    return (
        <ul>
        {favoriteUsers.map((favorite, index) => (
            <li key={index}>
                {favorite.first_name}
            </li>
        ))}
        </ul>
    )
}

export default MyFavoritesList;