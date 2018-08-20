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
  config.mongoose={
    client:{
      url:'mongodb://127.0.0.1:27017/yousuu',
      options:{}
    }
  }

  return config;
};
