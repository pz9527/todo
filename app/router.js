module.exports=app=>{
    const { controller,router }=app
    router.get('/',controller.home.firstPage),
    router.get('/admin/user',controller.user.getUser)
}