!(function () {
  "use strict";

  function data_processing_engine(options) {
    options = options || {};
  }
  if (typeof define === "function" && define.amd)
    (this.data_processing_engine = data_processing_engine),
      define(data_processing_engine);
  else if (typeof module === "object" && module.exports)
    module.exports = data_processing_engine;
  else this.data_processing_engine = data_processing_engine;
})();