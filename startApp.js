const { spawn } = require('child_process');

const command = 'react-native';

const runArgs = process.env.NODE_ENV === 'production' ? [
  'run-android',
  '--variant=release'
] : [
  'run-android'
];

const logArgs = [
  'log-android'
];

const options = {
  shell: true,
  stdio: 'inherit'
};

if (process.env.NODE_ENV === 'production') {
  const run = spawn(command, runArgs, options);
} else {
  const run = spawn(command, runArgs, options);
  const log = spawn(command, logArgs, options);
}
