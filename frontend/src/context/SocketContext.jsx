import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

// Correctly create the context
export const SocketContext = createContext();

// Custom hook to use the socket context
export const useSocketContext = () => {
    return useContext(SocketContext);
}

// Socket context provider component
export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authuser } = useAuthContext(); // Renamed authuser to authUser

    useEffect(() => {
        if (authuser) {
            const socket = io("https://chat-application-suvidh.onrender.com/", {
                query: {
                    userId: authuser._id
                }
            });

            setSocket(socket);

            socket.on("getonlineusers", (users) => {
                setOnlineUsers(users);
            });

            return () => {
                socket.close();
                setSocket(null);
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authuser]); // Added authUser to the dependency array

    // Wrap children with SocketContext.Provider and provide the socket and onlineUsers value
    return (
        <SocketContext.Provider value={{socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
}
