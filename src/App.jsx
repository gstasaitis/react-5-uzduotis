import { useEffect, useState } from 'react'
import './App.css'
import './loader.css'
import PrintUser from './PrintUser'
import Loading from './Loading'

function App() {

  const [user, setUser] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchData = async () => {
    try {
      const resp = await fetch('https://api.github.com/users/dkoncius')
      const data = await resp.json();
      setUser(data)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // užkrovimo animacija
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [user])

  return (
<>
    {isLoaded && user ?
    <PrintUser user={user} fetchData={fetchData} /> :
    <Loading/>
    }
</>
  )
}

export default App
