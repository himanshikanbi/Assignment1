const fs = require("fs")

const removeFile = (file_path) => {
    return new Promise((resolve, reject) => {

        fs.unlink(file_path, (err) => {
            if (err) {
                return reject(err)
            }
            else {
                return resolve('file removed successfully.')
            }
        })
    })
}

removeFile('./files/text1.txt').then(msg => {
    console.log(msg)
}).catch(error => {
    console.log('error occured while deleting file ' + error)
})