const Controller =require('egg').Controller
class HomeController extends Controller{
    async firstPage(){
        this.ctx.body='ojbk'
    }
}
module.exports=HomeController