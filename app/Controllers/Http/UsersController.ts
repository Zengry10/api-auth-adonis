// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsersController {
    
    public async index(){

        return User.all();
    }

    public async getOne(){
        return User.all();
    }

    public async register({ request }){
        
        const data = request.body();

        const user = await User.create({
          firstname: data.firstname,
          lastname: data.lastname,
          email:data.numero,
          numero:data.numero,
          date_of_birth:data.date_of_birth,
          password: await Hash.make(data.password)
          
        })
    
        return user
    }

    public async login({ request, response, auth }){
        const email = request.input('email')
        const password = request.input('password')
      
        try {
          const token = await auth.use('api').attempt(email, password)
          return token
        } catch {
          return response.unauthorized('Invalid credentials')
        }
      
    
    
      
      
    }

}

    

    

