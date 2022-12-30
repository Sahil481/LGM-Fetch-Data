import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const [users, setUsers] = useState([])
  const [users2, setUsers2] = useState([])

  async function getData() {
    const response = await fetch('https://reqres.in/api/users?page=1')
    const jsonResponse = await response.json();
    const response2 = await fetch('https://reqres.in/api/users?page=2')
    const jsonResponse2 = await response2.json();
    setUsers(jsonResponse.data)
    setUsers2(jsonResponse2.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button class="button-31" role="button" onClick={getData}>Get Data</button>
      </header>
      <div class='main-container'>
        <main>
          {users?.map((user, index) => {
            console.log(index);
            return (
              <div class='container' key={index}>
                <div class="row">
                  <div>
                    <div class="our-team">
                      <div class="picture">
                        <img class="img-fluid" src={user.avatar} />
                      </div>
                      <div class="team-content">
                        <h3 class="name">{user.first_name + " " + user.last_name}</h3>
                        <h4 class="title">{user.email}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {users2?.map((user, index) => {
            return (
              <div class='container' key={index}>
                <div class="row">
                  <div>
                    <div class="our-team">
                      <div class="picture">
                        <img class="img-fluid" src={user.avatar} />
                      </div>
                      <div class="team-content">
                        <h3 class="name">{user.first_name + " " + user.last_name}</h3>
                        <h4 class="title">{user.email}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </main>
      </div>
    </div>
  );
}


export default App;
