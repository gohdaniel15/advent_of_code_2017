fs = require('fs')

fs.readFile('./correction_checksum.txt', 'utf-8', (error, data) => {
  let checkSum = ''

  if (error) {
    return error
  } else {
    let lines = data.split('\n')
    let splitLines = lines.map((line) => line.split('\t'))

    checkSum = splitLines
      .map((line) => Math.max(...line) - Math.min(...line))
      .reduce((sum, value) => sum + value, 0)
  }

  console.log(checkSum)
})
