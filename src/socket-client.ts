import { Manager, Socket } from 'socket.io-client';

export const connectToServer = () => {
  const manager = new Manager( 'http://localhost:3000' );
  const socket = manager.socket( '/' );
  addListeners( socket );
};

const addListeners = ( socket: Socket ) => {
  socket.on( 'connect', () => {
    const serverStatusLabel = document.querySelector( '#server-status' );
    if ( serverStatusLabel ) {
      serverStatusLabel.innerHTML = 'Connected';
    }
  } );

  socket.on( 'disconnect', () => {
    const serverStatusLabel = document.querySelector( '#server-status' );
    if ( serverStatusLabel ) {
      serverStatusLabel.innerHTML = 'Disconnected';
    }
  } );

  socket.on( 'clients-updated', ( clients: string[] ) => {
    
    const clientsUL = document.querySelector<HTMLUListElement>( '#clients-ul' );
    
    if ( !clientsUL ) return;

    let clientsHtml = '';
    clients.forEach( clientId => {
      clientsHtml += `<li>${ clientId }</li>`;
    } );

    clientsUL.innerHTML = clientsHtml;
  } );
};

connectToServer();

