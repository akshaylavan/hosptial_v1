import React from 'react'
import { useState } from 'react'
import {assets} from '../assets/assets'
const MyProfile = () => {

  const [userData,setUserData] = useState({
    name:"Akshay Lavan",
    image:assets.profile_pic,
    email:'akshaylavan783@gamil.com',
    phone:'+91 9843076688',
    address:{
      line1:"57th Cross, Richmond ",
      line2:"Circle, Church Road, London"
    },
    gender:'Male',
    dob:'2005-05-28'
  })

    const [isEdit,setIsEdit] = useState(false)


  return (
    <div>
        <img src={userData.image} alt="" />

      {
        isEdit
        ?<input type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/> 
        :<p>{userData.name}</p>
      }

    </div>
  )
}

export default MyProfile