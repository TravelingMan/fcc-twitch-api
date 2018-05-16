/*
1. I can see whether Free Code Camp is currently streaming on Twitch.tv.
2. I can click the status output and be sent directly to the Free Code Camp's Twitch.tv 
    channel.
3. If a Twitch user is currently streaming, I can see additional details about what
    they are streaming.
URL: https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api
API: https://wind-bow.glitch.me/
    USAGE:
Replace the Twitch API base URL https://api.twitch.tv/kraken with 
https://wind-bow.gomix.me/twitch-api. Use this endpoint according to the Twitch API
documentation.

NOTE:
This server caches data to lower the request rate. To prevent abuses this server accepts
GET requests only, and serves only routes /users/:user, /channels/:channel, and
/streams/:stream. These are more than enough to complete the challenge. 
*/

"use strict";

function retrieveJSON(urlString) {
    const request = new XMLHttpRequest();
    request.open("GET", urlString, true);

    request.onload = () => {
        let jsonResult = request.response;
        parseJSON(jsonResult);
    };

    request.onerror = () => {
        console.log("There was an error retrieving the JSON from " + urlString);
    };

    request.send();
}