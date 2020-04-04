// name: getFirstUriFromPlaylists
// outputs: 1
uri = "";
if (msg.payload.playlists.items.length >= 1) {
    uri = msg.payload.playlists.items[0].uri;
}
payload = {uri: uri};
return {payload: payload};