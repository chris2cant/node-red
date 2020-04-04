// name: formatPayloadForPlaylistSearch
// outputs: 1
params = [
    msg.payload,
    {limit: 1, offset: 0}
];
return {params: params};