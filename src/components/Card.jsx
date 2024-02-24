import { useState } from 'react'

function Card({user}) {

  function userSkills() {
    let skills = user.skills;
    skills = skills.map((skill) => {
      return skill.charAt(0).toUpperCase() + skill.slice(1);
    })
    
    return skills.join(', ')
  }
  
  return(
    <div className="border border-black p-[20px] rounded-md hover:shadow-lg">
      <div className="flex  items-center justify-center mb-5">
        <img className="h-[100px] rounded-full" src={user.avatar[0].url} alt="" />
      </div>
      <div>
        <div>Name : {user.firstName} {user.lastName}</div>
        <div>Email : {user.email}</div>
        <div>Birth Date: {user.birthday.slice(0, 10)}</div>
        <div>Skills : {userSkills()}</div>
      </div>
    </div>
  );
}

export default Card