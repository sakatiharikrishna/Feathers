const { Service } = require('feathers-memory');

exports.Messages = class Messages extends Service {
  async create(data, params) {
    const { text } = data;
    const { user } = params;

    const message = {
      text,
      userId: user._id,
      createdAt: new Date().getTime(),
    };

    return super.create(message, params);
  }
};
