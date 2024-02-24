import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('https://api.fake-rest.refine.dev/users');
      setUsers(await response.json());
    }
    fetchUserData();
  },[])

  return (
    <>
      <Header />
      <main>
        <div className='grid grid-cols-4 gap-5 max-md:grid-cols-2 md:max-lg:grid-cols-3'>
          {users.map( (user) => {
            return <Card key={user.id} user={user}/>
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
