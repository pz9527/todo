module.exports=app=>{
    const { controller,router }=app
    router.get('/',controller.home.firstPage),
    router.get('/admin/user',controller.user.getUser)
    router.post('/admin/insertUser',controller.user.insertUser)
}