/*
They are used internally by console.log() and console.error(), respectively.

Writes may be synchronous depending on what the stream is connected to and whether the system is Windows or POSIX:
  1. Files: synchronous on Windows and POSIX
  2. TTYs (Terminals): asynchronous on Windows, synchronous on POSIX
  3. Pipes (and sockets): synchronous on Windows, asynchronous on POSIX
*/
