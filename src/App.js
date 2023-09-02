import Reac, { useEffect, useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [connection, setConnection] = useState(false);
  const [activeUser, setActiveUser] = useState("");
  const [socket, setSocket] = useState();
  const [userToUserMessage, setUserToUserMessage] = useState("");

  const sendUserToUserMessage = (message) => {
    socket.send(
      JSON.stringify({ command: "NEW MESSAGE", user: activeUser, message })
    );
  };

  const onConnect = () => {
    setConnection(true);
    const socket = new WebSocket(`ws://localhost:8080`);

    socket.addEventListener("open", (e) => {
      setSocket(socket);
      // tell back end who I am
      socket.send(JSON.stringify({ command: "NEW_USER", userName }));
    });

    socket.addEventListener("message", (event) => {
      const messageObj = JSON.parse(event.data);

      switch (messageObj.command) {
        case "USER_LIST":
          console.log(messageObj.activeUsers);
          setActiveUsers(messageObj.activeUsers);
          break;

        case "USER_TO_USER_MESSAGE":
          console.log(messageObj.message);
          setUserToUserMessage(messageObj.message);
          break;

        // case "USER_ADDED":
        //   console.log(activeUsers, messageObj.newUser);
        //   // setActiveUsers([...activeUsers, messageObj.newUser]);
        //   break;

        default:
          console.log("Unknown message type");
          break;
      }
    });
  };
  console.log(userToUserMessage);
  return (
    <>
      {!connection ? (
        <>
          <input
            onInput={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
          />
          <button onClick={onConnect}>Join chat</button>
        </>
      ) : (
        <h1>Username: {userName}</h1>
      )}

      <p>Active users</p>
      {activeUsers.map((user) => {
        return (
          <>
            <p
              onClick={() => {
                setActiveUser(user);
              }}
            >
              {user}
            </p>
            {user === activeUser && (
              <>
                <input
                  onInput={(e) => {
                    sendUserToUserMessage(e.target.value);
                  }}
                  type="text"
                />
                <p>:::{userToUserMessage}</p>
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default App;
