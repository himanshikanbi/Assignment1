import fetch from 'node-fetch'
globalThis.fetch = fetch

async function callfunc() {
    fetch('https://google.com')
    .then(res => res.text())
    .then(text => printData(text));
}
callfunc();
function printData(res)
{
    console.log(res);
}