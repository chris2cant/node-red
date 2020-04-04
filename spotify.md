# Spotify

Package - node-red-contrib-spotify

## Spotify developper account

1. Create a spotify developper account ([Spotify - Developper Dashboard](https://developer.spotify.com/dashboard/))
2. Go on your dashboard to get your `Client ID` and `Client Secret`

## Configuration

1. Click on spotify node
2. Click on edit of `Credentials` `Add new spotify-auth...`
3. Fill `Client ID` `Client Secret` with your Spotify developper account.
4. Fill `Scopes` with authorizations. Example : `user-modify-playback-state user-read-playback-state streaming` [Spotify - Authorization Scopes](https://developer.spotify.com/documentation/general/guides/scopes/)
5. Click on `Start Authentication`

## Play a playlist

Send to `play` spotify action this kind of payload.

```
msg.params = [
    {"context_uri": uriSpotify}
];
return msg;
```

Example

```
msg.params = [
    {"context_uri": "spotify:playlist:7xagyBLDKBk8D6wypYa8Ur"}
];
return msg;
```

## Links

[Spotify - Authorization Scopes](https://developer.spotify.com/documentation/general/guides/scopes/)
[Spotify - Developper Dashboard](https://developer.spotify.com/dashboard/)
[Spotify - Web API Reference](https://developer.spotify.com/documentation/web-api/reference/)
[spotify-web-api-node - Documentation](https://github.com/thelinmichael/spotify-web-api-node/blob/master/src/spotify-web-api.js)
[NodeRed - node-red-contrib-spotify](https://github.com/pckhib/node-red-contrib-spotify)
