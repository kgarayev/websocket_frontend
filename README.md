# WebSocket Frontend

This repository contains a WebSocket frontend application built with React. The application facilitates real-time communication between users through a WebSocket connection.

## Technologies Used

- **React**: React is a popular JavaScript library for building user interfaces. It provides a structured and efficient way to create interactive web applications.

- **WebSocket**: The frontend uses the WebSocket protocol to establish a connection with the WebSocket backend server, enabling real-time messaging.

- **JavaScript (ES6+)**: The application is written in modern JavaScript, including ES6+ features, to create a clean and maintainable codebase.

- **useState Hook**: React's `useState` hook is used to manage and update state variables, allowing for dynamic user interactions and rendering.

- **WebSocket API**: The standard WebSocket API is employed to create, configure, and manage WebSocket connections, enabling bidirectional communication between the frontend and backend.

- **React Components**: The application is structured using React components to encapsulate functionality and improve code organization and readability.

- **JSON Serialization**: JSON (JavaScript Object Notation) is used to serialise and deserialise messages exchanged with the WebSocket server, ensuring data consistency and compatibility.

## How it Works
The frontend application allows users to:

1. Enter a username and join a chat room.
2. See a list of active users in the chat room.
3. Send messages to other users in real-time.

Key components of the application include:

- **useState**: React's `useState` hook is used to manage state variables, such as `userName`, `activeUsers`, `connection`, `activeUser`, `socket`, and `userToUserMessage`.

- **WebSocket Connection**: The application establishes a WebSocket connection to the backend server when the user clicks the "Join chat" button. It sends the `NEW_USER` command with the user's chosen username to the server.

- **Message Handling**: The frontend listens for incoming WebSocket messages and processes them based on their commands. It handles messages related to user lists (`USER_LIST`) and user-to-user messages (`USER_TO_USER_MESSAGE`).

- **User Interaction**: Users can select an active user from the list and send messages directly to them. The application updates the user interface in real-time to display messages received from other users.

This WebSocket frontend provides a foundation for building real-time chat applications and can be extended and customised to suit specific requirements.
