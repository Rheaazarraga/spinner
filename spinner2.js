const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  ', '\r\/  ', '\r\-  ', '\r\\   ', '\r|   ' + "\n"];
let counter = 0;
spinner.forEach(element => {
  counter += 200;
  setTimeout(() => {
    process.stdout.write(element);
  }, counter);
});

/**forEach method executes a provided function once for each array element
 * set counter at 0 to avoid delay for the first element's output
 * increase counter by .2 seconds
 **/

