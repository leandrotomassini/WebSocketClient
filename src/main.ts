import './style.css';
import { connectToServer } from './socket-client';

document.querySelector<HTMLDivElement>( '#app' )!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <input id="jwtToken" placeholder="Json web token"/>
    <button id="btn-connect">Connect</button>
    </br>
    </br>
    <span>Status: <b id="server-status">Offline</b></span>
    <ul id="clients-ul"></ul>
    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>
    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`;

const jwtToken = document.querySelector<HTMLInputElement>( '#jwtToken' )!;
const btnConnect = document.querySelector<HTMLButtonElement>( '#btn-connect' )!;

btnConnect.addEventListener( 'click', () => {
  if ( jwtToken.value.trim().length <= 0 ) return alert( 'Enter a valid JWT' );
  connectToServer( jwtToken.value.trim() );
} );