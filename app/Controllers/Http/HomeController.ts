// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    public async index(){
        console.log('ddd')

        return {hello:"Adonis API"}

    }
}
