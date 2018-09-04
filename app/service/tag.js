const Service = require('egg').Service
class TagService extends Service {
  async getAllTag () {
    return await this.ctx.model.Tag.find({}, null, { limit: 10 })
  }
}
module.exports = TagService