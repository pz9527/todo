'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/yousuu',
    options: {
      autoIndex: false
    }
  }
  config.security = {
    csrf: {
      enable: false
    }
  }
  config.keys = "test"
  return config;
};
