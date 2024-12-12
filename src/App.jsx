import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Crud from './components/crud/Crud'

function App() {
  // const [posts, setPosts] = useState(null)
  // const [reload, setReload] = useState(false)
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/user")
  //     .then(res => setPosts(res.data))
  // }, [reload])

  // const handleCreatePost = (e) => {
  //   e.preventDefault()
  //   const formData = new FormData(e.target)
  //   const user = Object.fromEntries(formData)

  //   axios
  //     .post("http://localhost:3000/user", user)
  //     .then(res => {
  //       e.target.reset()
  //       setReload(prev => !prev)
  //     })
  // }

  return (
    <>

      <Crud />

    </>
  )
}

export default App
