
import { useState } from 'react'
import './App.css'
import ActivityCard from './components/ActivityCard/ActivityCard'
import ActivityCardList from './components/ActivityCardList/ActivityCardList'
import EditProfileForm from './components/EditProfileForm/EditProfileForm'
import ExcecisePostForm from './components/ExcercisePostForm/ExcecisePostForm'

import StatusList from './components/StatusList/StatusList'
import Header from './components/test/Header'


function App() {

  // const [posts, setPosts] = useState([]);

  // function addPost(newPost) {
  //     setPost(prevPoses =>{
  //       return [...prevPosts, newPost];
  //     })
  // }


  return (
    <div>
     
      {/* <EditProfileForm /> */}

      <ActivityCardList />
    
      {/* <ExcecisePostForm  /> */}

    

      
    </div>
   
 
  )
}

export default App
