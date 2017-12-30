const { spawn } = require('child_process');

const command = 'react-native';

const runArgs = [
  'run-android'
];

const logArgs = [
  'log-android'
];

const options = {
  shell: true,
  stdio: 'inherit'
};

const run = spawn(command, runArgs, options);
const log = spawn(command, logArgs, options);
