import cookie from 'cookie'

module.exports = function({
  name = 'connect.sid'
} = {}) {
  let value = null
  return (req, res, next) => {
    res.once('finish', () => {
      const list = res.getHeader('set-cookie')
      if (list) {
        for (let item of list) {
          if (cookie.parse(item)[name]) {
            value = null
            break
          }
        }
      }
    })
    if (value === null && req.headers.cookie) {
      value = req.headers.cookie
    } else if (value) {
      req.headers.cookie = value
    }
    next && next()
  }
}
