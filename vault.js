"use strict";
module.exports = function() {
  let vault = {};

  const setValue = function(key, value) {
    vault[key] = value;
  };

  const getValue = function(key) {
    if (!key) {
      return null;
    } else if (!vault[key]) {
      return null;
    } else if (vault[key]) {
      return vault[key];
    }
  };

  return {
    setValue: setValue,
    getValue: getValue
  };
};
