// name: playUri
// outputs: 1
msg.params = [
    {"context_uri": msg.payload.uri}
];
return msg;