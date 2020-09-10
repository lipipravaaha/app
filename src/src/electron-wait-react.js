// eslint-disable-next-line @typescript-eslint/no-var-requires
const net = require('net')

const port = process.env.PORT ? process.env.PORT - 100 : 3000

process.env.ELECTRON_START_URL = `http://localhost:${port}`

const client = new net.Socket()

let startedElectron = false

const tryConnection = () =>
  client.connect(
    {
      port: port
    },
    () => {
      client.end()
      if (!startedElectron) {
        console.log('starting electron')
        startedElectron = true
        const exec = require('child_process').exec
        const electron = exec('npm run electron')
        // eslint-disable-next-line space-before-function-paren
        electron.stdout.on('data', function(data) {
          console.log('stdout: ' + data.toString())
        })
      }
    }
  )

tryConnection()

// eslint-disable-next-line prettier/prettier
client.on('error', (error) => {
  console.log(error)
  setTimeout(tryConnection, 1000)
})
