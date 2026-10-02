const host = 'barreraconrodillos.com';
const key = '18dfb887d3af4e36bdabb4b9344edb7e';
const keyLocation = `https://${host}/${key}.txt`;

const args = process.argv.slice(2);
const urls = args.length ? args : [`https://${host}/`];

for (const url of urls) {
  const parsed = new URL(url);
  if (parsed.hostname !== host && parsed.hostname !== `www.${host}`) {
    throw new Error(`Solo se pueden enviar URLs de ${host}: ${url}`);
  }
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList: urls,
  }),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow respondió ${response.status}: ${body}`);
}

console.log(`IndexNow aceptó ${urls.length} URL(s):`);
for (const url of urls) console.log(`- ${url}`);
