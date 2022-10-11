import { Server as ProxyChainServer } from 'proxy-chain'

const port = 8000

const server = new ProxyChainServer({
  port,
  prepareRequestFunction: ({ username, password }) => {
    return {
      requestAuthentication: username !== 'bob' || password !== 'secret',
    }
  },
})

server.listen(() => {
  console.log(`Running on ${port}`)
})
