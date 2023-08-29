const os = require("os");

// return the cpu architecture
console.log("CPU architecture: " + os.arch() + " version: " + os.version());

// return total no. of cpu list in system
console.log(os.cpus());
// It returns the amount of free system memory in bytes
console.log("Free memory: " + os.freemem());

// It return total amount of system memory in bytes
console.log("Total memory: " + os.totalmem());

// It returns the list of network interfaces
console.log("List of network Interfaces: " + os.networkInterfaces());

// It returns the operating systems default directory for temp files.
console.log("OS default directory for temp files : " + os.tmpdir());

console.log("home directory: " + os.homedir());

// return the endianness of system
console.log("Endianness of system: " + os.endianness());

// It returns hostname of system
console.log("Hostname: " + os.hostname());

// It return operating system name
console.log("Operating system name: " + os.type());

// It returns the platform of os
console.log("operating system platform: " + os.platform());

// It returns the operating systems release.
console.log("OS release : " + os.release());

console.log(JSON.stringify(os.EOL));

console.log(os.getPriority(2453));
