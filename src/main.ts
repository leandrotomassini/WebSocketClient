import './socket-client.ts';
import './style.css';

document.querySelector<HTMLDivElement>( '#app' )!.innerHTML = `
  <div>

    <h1>Websocket - Client</h1>

    <span>Status: <b id="server-status">Offline</b></span>

    <ul id="clients-ul"></ul>
 </div>
`;

