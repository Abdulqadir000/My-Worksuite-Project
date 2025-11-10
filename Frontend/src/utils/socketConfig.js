import io from "socket.io-client";

// Get the API URL from environment variables or use defaults
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

// Create and export the socket instance
export const socket = io(API_URL, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
});

// Add connection event listeners
socket.on("connect", () => {
  console.log("Connected to Socket.IO server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from Socket.IO server");
});

socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
});

export default socket;
