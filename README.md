# Real-Time Chat Application

## Description

This is a real-time chat application built using React for the front end, Node.js and Express for the back end, and Socket.IO for real-time communication between clients and the server.

## Features

- **Real-time Communication**: Utilizes Socket.IO for real-time bidirectional event-based communication.
- **User Authentication**: Supports user authentication using JSON Web Tokens (JWT).
- **Responsive Design**: Built with a responsive design to ensure usability across various devices.
- **Message History**: Keeps track of chat history, allowing users to view past messages.
- **User Typing Indicator**: Displays typing indicators to notify users when someone is typing a message.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/chat-application.git`
2. Navigate to the project directory: `cd chat-application`
3. Install dependencies:
   - For the client:
     ```bash
     cd frontend
     npm install
     ```
   - For the server:
     ```bash
     npm install
     ```
4. Create a `.env` file in the `server` directory and set the following environment variables:
   PORT=5000
   MONGO_DB_URL=your_MongoDb_url
   JWT_secret=your_JWT_Secret
   
5. Start the server:
   ```bash
     npm run server
   ```
   
6.Start the client:
```bash
cd frontend
npm run dev
```

## Usage

1.Open the application in your web browser.

2.Sign up for a new account or log in if you already have an account.

3.Start chatting with other users in real-time.

## Usage

Open the application in your web browser.

Sign up for a new account or log in if you already have an account.

Start chatting with other users in real-time.

## Technologies Used

React.

Node.js.

Express.

Socket.IO.

JSON Web Tokens (JWT).

Zustand



## Acknowledgements

The project structure and setup was inspired by @AS a Programmer on Youtube.

## Contact
For any inquiries or feedback, please contact [Suvidh Kaushik]([kaushiksuvidh6@gmail.com]).




