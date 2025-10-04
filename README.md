# WebSocket Client

A client-side application designed to connect and interact with a WebSocket server. This project is built using Vite, TypeScript, and the `socket.io-client` library.

## Overview

This project provides the front-end interface for a real-time chat application. It handles the connection to a WebSocket server, authenticates using a JSON Web Token (JWT), and facilitates real-time communication.

## Features

*   **JWT Authentication:** Securely connect to the WebSocket server using a provided JWT.
*   **Real-Time Status:** See the live connection status (Connected/Disconnected).
*   **Connected Clients:** View a list of all clients currently connected to the server.
*   **Messaging:** Send and receive messages in real-time.

## Prerequisites

*   [Node.js](https://nodejs.org/) installed on your machine.
*   [Yarn](https://yarnpkg.com/) package manager.
*   A running instance of the corresponding WebSocket server.

## Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory and install the dependencies:
    ```bash
    cd WebSocketClient
    yarn install
    ```

## Running the Application

1.  Ensure the WebSocket server is running and accessible at `http://localhost:3000`.

2.  Run the client in development mode:
    ```bash
    yarn dev
    ```

3.  Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

4.  To connect, enter a valid JWT into the input field and click the "Connect" button.

---
*ltomassini*