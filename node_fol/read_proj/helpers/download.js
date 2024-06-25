const fs = require('fs');
const url = require('url');
const spawn = require('child_process').spawn;

const DOWNLOAD_DIR = 'downloads';  // create this folder manually in the proj_root folder.




const  download_file_curl = (file_url) => {
  
    console.log("file_url: ", file_url);
    // extract the file name
    const file_name = url.parse(file_url).pathname.split('/').pop();
    console.log("file_name: ", file_name);

    // create an instance of writable stream
    const file = fs.createWriteStream( __dirname + "/" + DOWNLOAD_DIR + "/" + file_name);
    console.log("file: ", file.path);

    // execute curl using child_process' spawn function
    const curl = spawn('curl', [file_url]);
    console.log("curl: ", curl.spawnfile);

     //  add a 'data' event listener for the spawn instance
   curl.stdout.on('data', function (data) { file.write(data); });

     // add an 'end' event listener to close the writeable stream
    curl.stdout.on('end', function (data) {
        file.end();
        console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
    });

      // when the spawn child process exits, check for errors & close the wr stream.
    curl.on('exit', function (code) {
        if (code != 0) {
            console.log('Failed: ' + code);
        }
    });
}

