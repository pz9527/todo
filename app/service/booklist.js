const Service = require('egg').Service
class BooklistService extends Service {
  async getBooklistByName (page, keyword, limit) {
    // console.log(page + keyword + limit);

    const reg = new RegExp(keyword, 'i')
    return await this.ctx.model.Booklist.find({ title: { $regex: reg } })
      .limit(limit)
      .skip((page - 1) * limit)
      .select('title favsTotal createdAt praiseTotal')
      .populate({ path: 'creater', select: 'userName' })
  }
}
module.exports = BooklistService