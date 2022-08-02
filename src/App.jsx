
import { useState } from 'react'
import './App.css'

import ActivityCardList from './components/ActivityCardList/ActivityCardList'
import EditProfileForm from './components/EditProfileForm/EditProfileForm'





function App() {

  // const [posts, setPosts] = useState([]);

  // function addPost(newPost) {
  //     setPost(prevPoses =>{
  //       return [...prevPosts, newPost];
  //     })
  // }


  return (
    <div>
     
      <EditProfileForm />

      <ActivityCardList />
    </div>
   
 
  )
}

export default App
