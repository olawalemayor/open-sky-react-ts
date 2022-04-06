import React, { useState } from "react";
import Joi from "joi";

interface LoginProps {
  setUser: any;
}

export default function LoginComponent({ setUser }: LoginProps) {
  //initialization
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const schema = Joi.object({
    username: Joi.string().required().max(15),
    password: Joi.string().required().max(15),
  });

  const { error } = schema.validate({ username, password });

  //Login
  function login() {
    //Validate the login form and don't allow navigation
    if (error) {
      window.alert(error?.details[0].message);
      return;
    }

    //The login as been validated

    //call the server to check username and password are valid, for now just logging them to console
    console.log("Username, Password:", username + " ," + password);

    //if user is valid, set the user
    setUser({ username: username, isAuthenticated: true });
  }

  return (
    <div className="login-title">
      <h2>LOGIN</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="login-form">
          <div className="username">
            <label htmlFor="username" className="form-label">
              Username :
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
          </div>

          <div className="password">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => login()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
