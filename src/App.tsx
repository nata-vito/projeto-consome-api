import * as React from 'react';
import './Div.css';
import './App.css'

function App() {
  const [users, setUsers] = React.useState([]) as any;

  const funcaoAssync = async () => { 
    const resultado = await fetch("https://reqres.in/api/users/"); 
    const json = await resultado.json(); 
    setUsers(json.data); 
  }; 

  funcaoAssync()
  return (
    <>
      <div className='flex'>{ users.map((user: any) => { return ( 
        <>
          <div className='box' key={user.id}>
            <img className='avatar' key={user.avatar} src= {user.avatar} />
            <div className="box-red">
              <p> _ </p>
              <p className='p2'> <strong>{(user.first_name.toUpperCase())}</strong> <br /> {user.email} </p>   
            </div>
          </div> 
          </>); 
          })
        } </div>
      </>
  )
}

export default App
