const Controller = require('egg').Controller
class SearchController extends Controller {
  async getUserByName () {
    const { ctx } = this
    let { page = 1, keyword = '', type = '' } = ctx.query
    let userLIst = await ctx.service.UserService.getUserList(page, keyword)
  }
}
module.exports = SearchController