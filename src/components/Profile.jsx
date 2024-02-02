import React from 'react'

function Profile() {

    const imageUrl = '../src/assets/prof.jpg'

    const handleClick = (e) => e.target.style.display = "none"

  return (
   
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
  )
}

export default Profile