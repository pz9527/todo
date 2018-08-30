const Controller=require('egg').Controller
class UserController extends Controller{
    async getUser(){
        const {ctx}=this
        let {page=1,keyword=''}=ctx.query
        let resMsg={
            errcode:0,
            data:{},
            msg:'success'
        }
        console.log(keyword)
        resMsg.data=await ctx.service.user.getUserList(page,keyword)
        ctx.body=resMsg
    }
    async insertUser(){
        console.log("controll ok")
        await this.ctx.service.user.createUser()
        this.ctx.body={
            msg:true
        }
    }
}
module.exports=UserController