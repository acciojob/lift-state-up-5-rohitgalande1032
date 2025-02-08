import React from 'react'

const Child = ({isLoggedIn, setIsLoggedIn}) => {

    const handleLogIn = () => {
        setIsLoggedIn(true);
    }
  return (
    <div>
       {!isLoggedIn ? (
        <form onSubmit={handleLogIn}>
            <label >Username:</label>
          <input type="text" placeholder="Username" required /> <br />
          <label >Password:</label>
          <input type="password" placeholder="Password" required /><br />
          <button type="submit">Login</button>
        </form>
        ) : (
            <p>You are loggedin!</p>
        )
       }
    </div>
  )
}

export default Child