
import React,{useState} from 'react';
import './index.css';

const App=()=>{


  const [users ,setUser] = useState([]);


  const loadUsers = async ()=>{
    console.log('before')
    const response= await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUser(data.data);
  };

  return (
    <>
    <header className="Nav">
      <h1>Lets Grow More</h1>
      <div className="btn" onClick={loadUsers}>Get Data</div>
      </header>

      <div className="row">
      {users?.map((current,index) =>{
      return (
        <div className="card column" key={index}>
        <img src={current.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">
            {current.first_name} {current.last_name}
          </h3>
          <h4 className="card-text">{current.email}</h4>
        </div>
      </div>
          );
      })}
      </div>
      </>
  );
    }

export default App;
