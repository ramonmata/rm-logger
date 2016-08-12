# rm-logger
Simple, Opinionated Logger library

## Install:
```sh
npm install rm-logger
```

## Usage:
```js
// Import Library
var Logger = require('rm-logger');

// Create an instance
var log = new Logger('App'); // If nothing is passed, date becomes first data in log line

// Start Loggin
log.log('Message which displays NODE_ENV = %s ', process.env.NODE_ENV);
log.info('An information message');
log.debug('Debug message which only shows when NODE_ENV !=== production ');
log.warn('A warning message');
log.error('An error with a JSON variable: %j', {statusCode:404, statusMessage:'Not Found'});
```

## Output:
```sh
App [2016-08-11 18:17:59] Message which displays NODE_ENV = debug
App [2016-08-11 18:17:59] INFO - An information message
App [2016-08-11 18:17:59] DEBUG - Debug message which only shows when NODE_ENV !=== production
App [2016-08-11 18:17:59] WARN - A warning message
App [2016-08-11 18:17:59] ERROR - An error with a JSON variable: {"statusCode":404,"statusMessage":"Not Found"}
```

## String formatting:
Supports printf-like format string as provided by Node.JS util library

```
%s - String
%d - Number (both integer and float)
%j - JSON
%% - single percent sign ('%')
```

## ... enjoy!