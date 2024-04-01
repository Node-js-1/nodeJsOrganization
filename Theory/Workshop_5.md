## slide #3 
 ## Introduction to Streams in Node.js

Definition of Streams in Node.js
Streams: Abstractions for continuous data flow.
Purpose: Handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.
Key Concept: Instead of loading data all at once, streams allow data to be processed in smaller chunks, making them ideal for large data handling.
Types of Streams
Readable Streams

Used for reading data from a source (e.g., file system, HTTP requests).
Example: fs.createReadStream() for reading file content.
Writable Streams

Allow writing data to a destination (e.g., file system, HTTP responses).
Example: fs.createWriteStream() for writing file content.
Duplex Streams

Both readable and writable.
Used in scenarios where data is both received and sent, such as TCP sockets.
Transform Streams

A type of Duplex stream where output is computed from input.
Example: zlib streams for compression.
Importance of Streams in Handling Large Amounts of Data Efficiently
Memory Efficiency: Avoids loading large amounts of data into memory. Suitable for handling files or data of unknown or large size.
Time Efficiency: Processes data as it comes in, leading to faster execution.
Scalability: Ideal for processing large datasets, like logs or large media files, without impacting performance. 


## slide #4
Understanding Streams in Node.js
How Streams Work
Stream Mechanics: In Node.js, streams are instances of EventEmitter. They emit events that can be listened to and acted upon, enabling real-time data processing.
Data Handling: Streams read or write data in chunks, allowing efficient processing of large datasets without overwhelming the system memory.
Example: A stream reading from a large file does so in pieces, emitting data as it's read, rather than waiting to read the entire file.
Buffering and Flowing Modes
Buffering (Paused) Mode

Data is read into an internal buffer and waits to be consumed.
Useful when you need to process data before it's sent further.
Example: Manually read chunks using stream.read() method.
Flowing (Streams) Mode

Data is automatically read and provided to an application as soon as it's available.
Easier for straightforward data transfers.
Example: Attach a data event listener using stream.on('data', callback).
Switching Modes: Streams can switch between these modes dynamically, based on the handlers attached to them.
Event-driven Architecture of Streams
Events in Streams: Key to handling stream data and lifecycle.

Common Events:

'data': Emitted when there is data available to read.
'end': Emitted when there is no more data to read.
'error': Emitted on encountering any error during stream operation.
'finish': Emitted when the stream has finished writing data (Writable streams).
Reactive Programming: Streams in Node.js allow for a reactive programming style, where your code reacts to data as it becomes available, rather than using a procedural approach. 

## Practical Work 


https://nodejs.org/api/stream.html