import React from 'react'

const User={
    name:'katy perry',
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:90,

};

    export default function MyProfile(){
       
      return(<>
        <h11>Hello,{User.name}</h11>
        <img className="avatar" src={User.imageUrl} alt={'Photo of'+User.name} style={{width:User.imageSize,height:User.imageSize,}}/>
        </>);
        
     }