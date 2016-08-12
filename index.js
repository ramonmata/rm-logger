var util = require('util');

function Logger(module){
  this.moduleName = module;
  this.isDebug = (process.env.NODE_ENV==='production')?false:true;
};

Logger.prototype.log = function(){
  var logDate = new Date();
  if (this.moduleName) {
    console.log(
      '%s [%s] %s',
      this.moduleName, 
      logDate.toLocaleString(),
      util.format.apply(this,arguments)
    );
  } else {
    console.log(
      '[%s] %s', 
      logDate.toLocaleString(),
      util.format.apply(this,arguments)
    );
  }
};

Logger.prototype.debug = function(){
  if (this.isDebug){
    this.log('DEBUG - %s', util.format.apply(this,arguments));
  }
}

Logger.prototype.info = function(){
  this.log('INFO - %s', util.format.apply(this,arguments));
}

Logger.prototype.warn = function(){
  this.log('WARN - %s', util.format.apply(this,arguments));
}

Logger.prototype.error = function(){
  this.log('ERROR - %s', util.format.apply(this,arguments));
}

module.exports = Logger;