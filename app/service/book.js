
const Service = require('egg').Service;

class BookService extends Service {
    async getBookByName (page, keyword, limit) {
        const reg = new RegExp(keyword, 'i')
        // console.log(page + keyword + limit);

        return await this.ctx.model.Book.find({ title: { $regex: reg } })
            .limit(limit)
            .skip((page - 1) * limit)
            .select('author title countWord updateAt score')
    }
    async getAllBooklist () {
        const { ctx } = this
        return await ctx.model.Booklist.find()
    }
    async getLatestBook () {
        return await this.ctx.model.Book.find().sort({ _id: -1 })
    }
    async getBookByAuthor (page, keyword, limit) {
        const reg = new RegExp(keyword, 'i')
        // console.log(page + keyword + limit);

        return await this.ctx.model.Book.find({ author: { $regex: reg } })
            .limit(limit)
            .skip((page - 1) * limit)
            .select('author title countWord updateAt score')
    }
}
module.exports = BookService