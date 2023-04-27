import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function LoginPage() {
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);

    async function login(ev) {
      ev.preventDefault();
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {"Content-Type":"application/json"},
        credentials: "include"
      });
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        alert("wrong credentials");
      }
    }

    if (redirect) {
      return <Navigate to={"/"} />
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text"
                   placeholder="Username" 
                   value={username} 
                   onChange={ev => SetUsername(ev.target.value)}/>
            <input type="text" 
                   placeholder="Password" 
                   value={password} 
                   onChange={ev => SetPassword(ev.target.value)}/>
            <button>Login</button>
        </form>
    )
}
export default LoginPage;