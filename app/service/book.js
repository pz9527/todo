
const Service = require('egg').Service;

class BookService extends Service {
    async getBookByName () {
        const { ctx } = this
        const reg = new RegExp(keyword, 'i')
    }
    async getAllBooklist () {
        const { ctx } = this
        return await ctx.model.Booklist.find()
    }
    async getLatestBook () {
        return await this.ctx.model.Book.find().sort({ _id: -1 })
    }
}
module.exports = BookService