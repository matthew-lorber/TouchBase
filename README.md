# TouchBase 

## Overview
* [TouchBase](https://touchbase-version-1.herokuapp.com/) is a MySQL | Express | Node.js whiteboarding and chat app that stores & analyzes user texts and provides data visualization through D3. 
* Websockets provide realtime updating to all users.

## Features
* Chatroom
* Collaborative Whiteboard

## Technologies
* [MySQL](https://www.mysql.com/) relational database
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) general purpose programming language
* [Node.js](https://nodejs.org/en/) JavaScript runtime environment
* [Express.js](https://expressjs.com/) Node.js application framework
* [Sequelize](https://sequelize.org/) promise-based Node.js ORM for MySQL
* [Socket.io](https://socket.io/) realtime bidirectional TCP communication
* [Nightmare](http://www.nightmarejs.org/) testing automation
* [HTML5](https://en.wikipedia.org/wiki/HTML5) webpage markup language
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3) style sheet language
* [Sass](https://sass-lang.com/) CSS extension language
* [jQuery](https://jquery.com/) simplify AJAX calls, DOM traversal and manipulation
* [D3.js](https://d3js.org/) data visualization components for DOM manipulation
* [SVG](https://www.w3.org/Graphics/SVG/) graphics format for D3

## Installation
* Create a file in the root directory `.env` and add the following text, replacing the *** with your credentials:
    - MYSQL_KEY=***
    - MYSQL_DB=***
    - MYSQL_HOST=***
    - MYSQL_UN=***

* TouchBase requires [Node.js](https://nodejs.org/) and [MySQL](https://www.mysql.com/) to run.
    ```sh
    npm i
    node server.js
* Local installation complete. Navigate to localhost:8080 in your browser.
* TouchBase is currently deployed with [Heroku](https://www.heroku.com)

## Future Enhancements
* [WebRTC](https://webrtc.org/) add as a realtime communication API
* [Agora.io](https://www.agora.io/en/) add as a SDK + streaming provider
* [Babelrc](https://babeljs.io/docs/en/6.26.3/babelrc) add as a JS compiler

## Credits
Credit to [nadirlaskar](https://github.com/socketio/socket.io/commits?author=nadirlaskar) and [darrachequesne](https://github.com/socketio/socket.io/commits?author=darrachequesne) who made the app forked for the whiteboard, and to [darrachequesne](https://veteran.cg.gy/booknote3052/chat-angular-socket-server/commit/5704581024b5b7c50692f25bf759480908838880?expanded=1&view=inline), who created the socket chat forked for the chat.

## License
MIT
​