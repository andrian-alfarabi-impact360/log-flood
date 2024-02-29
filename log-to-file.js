const fs = require('fs');

const logToFile = (content) => {
    fs.appendFile('log-to-file.log', `\n${content}`, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        } else {
            console.log(content);
        }
    });
}

let i = 0
setInterval(() => {
    i++
    logToFile(`This is log ${i}`)
}, 1);