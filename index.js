const readline = require('readline');

// Setup readline interface for command-line input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'not-redis-cli > '
});

// Start the command prompt
console.log('Welcome to the Key-Value Store! Type commands to interact or type "QUIT" to exit.');
rl.prompt();

// Event listener for each line of user input
rl.on('line', (line) => {
  const command = line.trim();

  if (command.toUpperCase() === 'QUIT') {
    console.log('Exiting the store. Goodbye!');
    rl.close();
    return;
  }

  // Prompt the user for the next command
  rl.prompt();
}).on('close', () => {
  console.log('Exited the store.');
  process.exit(0);
});