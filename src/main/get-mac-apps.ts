
const fs = require('fs');

const dirName = process.env.APPDATA || (process.platform == 'darwin' ? '/Applications' : process.env.HOME + "/.config")

// Function to get current filenames
// in directory
fs.readdir(dirName, (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log("\nCurrent directory filenames:");
        console.log("files", files);
        // files.forEach(file => {
        //     console.log(file);
        // })
    }
})