import React from 'react';
import {Image} from "react-bootstrap";

const ProfilePhoto = () => {
  return (
    <div className='img'>
      <Image src="./img/Me.jpg" rounded width={250} height={250}>

      </Image>
    </div>
  )
}

export default ProfilePhoto