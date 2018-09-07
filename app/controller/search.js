const Controller = require('egg').Controller
class SearchController extends Controller {
  async visitorSearch () {
    const { ctx } = this
    let keyword = ctx.params.keyword
    // console.log(keyword);
    let { page = 1, type = 'all', status = 0, limit = 25 } = ctx.query
    let resMsg = {
      errcode: 0,
      data: {},
      msg: 'success'
    }
    if (type == 'author') {
      resMsg.data = await ctx.service.book.getBookByAuthor(page, keyword, limit)
    } else if (type == 'title') {
      resMsg.data = await ctx.service.book.getBookByName(page, keyword, limit)
    } else if (type == 'booklist') {
      resMsg.data = await ctx.service.booklist.getBooklistByName(page, keyword, 20)
    }
    ctx.body = resMsg

  }
}
module.exports = SearchController