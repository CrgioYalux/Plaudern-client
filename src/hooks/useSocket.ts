const io = require('socket.io-client');

export const useSocket = (server:string) => {
  const socket:SocketIOClient.Socket = io(server , {transports: ['websocket', 'polling', 'flashsocket']});
  
  socket.on('connect', () => {

    socket.emit('saluts!', 'Hallo');
  });
};