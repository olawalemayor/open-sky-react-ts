import React, { useState } from "react";
import "./App.css";
import "./UI/ui.css";
import "./UI/container.css";
import { User } from "./models/user";
import { Header, LoginComponent, MainContent, SideBar } from "./UI";

function App() {
  const [user, setUser] = useState<User>({
    username: "",
    isAuthenticated: false,
  });

  const [isToggled, setIsToggled] = useState(false);

  const { isAuthenticated, username } = user;

  const toggleSidebar = () => {
    return isToggled ? "sidebar" : "sidebar toggled";
  };

  return (
    <div className="App">
      <Header
        username={username}
        toggled={isToggled}
        setIsToggled={setIsToggled}
      />

      {!isAuthenticated && <LoginComponent setUser={setUser} />}

      {isAuthenticated && (
        <div className="container">
          <div className={toggleSidebar()}>
            <SideBar />
          </div>

          <div className="main-content">
            <MainContent />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
