import { io } from "socket.io-client";

// Đọc từ biến môi trường
const socket = io(import.meta.env.VITE_SOCKET_URL, {
  withCredentials: true,
});

export default socket;
