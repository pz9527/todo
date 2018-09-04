
const Service = require('egg').Service;

class BookService extends Service {
    async getBookByName () {
        const { ctx } = this
        const reg = new RegExp(keyword, 'i')
    }
}