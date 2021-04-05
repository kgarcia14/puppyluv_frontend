import React, { useParams } from 'react-router-dom';



const UploadPhoto = ({ handleReload })=> {
    const { user_img } = useParams();

      const uploadPhoto = async (user_img) => {
        const response = await fetch(`https://puppyluv-b4e0d-default-rtdb.firebaseio.com/${user_img}`,
        {
            method: "POST",
        }
        );
        if (response.status === 200) {
            handleReload(true);        
        } else {
            alert("unable to add photo");
        }
      }
      return (
          <>
          <h3>Add Profile Photo</h3>
          <h2>{user_img}</h2>

          <button type="button" className="submit" onClick={() => uploadPhoto(user_img)}>

          </button>
          </>
      )
}
     
export default UploadPhoto;