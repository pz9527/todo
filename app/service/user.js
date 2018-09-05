'use strict'
const Service = require('egg').Service
class UserService extends Service {
    async getUserList (page, keyword) {
        const { ctx } = this
        const reg = new RegExp(keyword, 'i')
        return await ctx.model.User.find({ $or: [{ userName: { $regex: reg } }, { UID: { $regex: reg } }] }).limit(10).skip((page - 1) * 10).select('_id userName')
    }
    async createUser () {
        const { ctx } = this
        // console.log('serviceok')
        return await this.ctx.model.User.create({
            UID: ctx.request.body.UID,
            userName: ctx.request.body.userName,
        })
    }
}
module.exports = UserService