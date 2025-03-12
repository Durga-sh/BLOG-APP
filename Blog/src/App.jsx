import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  // const [count, setCount] = useState(0)
const { setLoading} = useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authService .getCurrentUser()

  .then((userData) =>{
    if (userData) {
      dispatch(login({userData}))
      
    }
    else{
      dispatch(logout())
    }
  })
  .catch()
  .finally(()=> setLoading(false))
} , [])
  return (
    <>
     
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>


    </>
  )
}

export default App
