import { Manager, Socket } from 'socket.io-client';

export const connectToServer = ( token: string ) => {
  const manager = new Manager( 'http://localhost:3000', {
    extraHeaders: {
      hola: 'mundo',
      authentication: token
    }
  } );
  const socket = manager.socket( '/' );
  addListeners( socket );
};

const addListeners = ( socket: Socket ) => {

  const messageForm = document.querySelector<HTMLFormElement>( '#message-form' );
  const messageInput = document.querySelector<HTMLInputElement>( '#message-input' );
  const messagesUl = document.querySelector<HTMLInputElement>( '#messages-ul' );

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


  messageForm?.addEventListener( 'submit', ( event ) => {
    event.preventDefault();

    if ( messageInput!.value.trim().length <= 0 ) return;

    socket.emit( 'message-from-client', {
      id: 'YO',
      message: messageInput!.value
    } );

    messageInput!.value = '';

  } );


  socket.on( 'messages-from-server', ( payload: { fullName: string, message: string; } ) => {
    const newMessage = `
    <li>
      <strong>${ payload.fullName }</strong> 
      <span>${ payload.message }</span>
    </li>`;

    const li = document.createElement( 'li' );
    li.innerHTML = newMessage;
    messagesUl?.append( li );
  } );
};


