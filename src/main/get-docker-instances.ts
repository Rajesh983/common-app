export async function dockerInstances() {
    //   const cmd = 'docker ps --format {{.Names}}'

    //   return new Promise((resolve, reject) => {
    //     exec(cmd, (err: Error | null, stdout: string, stderr: string) => {
    //       if (err) reject(err)
    //       resolve(stdout.split('\n'))
    //     })
    //   })
    const http = require('http');

    const options = {
        socketPath: '/var/run/docker.sock',
        path: '/v1.41/containers/json',
    };

    const callback = (res: any) => {
        console.log(`STATUS: ${res.statusCode}`);
        res.setEncoding('utf8');
        res.on('data', (data: any) => console.log({ data }));
        res.on('error', (data: any) => console.error(data));
    };

    const clientRequest = http.request(options, callback);
    clientRequest.end();
}