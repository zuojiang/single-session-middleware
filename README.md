single-session-middleware
===

Keep a single and latest session in the server end.

### Installation
```sh
$ npm i single-session-middleware -D
```

### Node.js

```js
import express from 'express'
import singleSession from 'single-session-middleware'
import proxy from 'http-proxy-middleware'

const app = express()

app.use(singleSession({
  name: 'PHPSESSID'
}))

app.use(proxy({
  target: 'http://192.168.1.1',
  changeOrigin: true
}))

app.listen(3000)
```

### Options

*  `options.name`: string, the `cookie-name` that some programming languages. Default: `connect.sid`.

### References

* [Session ID](https://en.wikipedia.org/wiki/Session_ID)

### License

MIT
