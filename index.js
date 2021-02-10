const mongoose = require('mongoose');


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/aprendendo',{
    useMongoClient:true
}).then( () =>{
    console.log("MongoDB conectado...")
}).catch((erro) => {
    console.log("Erro ao se conectar" + erro)
})
//  Model users
    //Define models
    const UserSchema = mongoose.Schema({
        nome: {
            type:'string',
            require:true
        },
        sobrenome:{
            type:'string',
            require:true
        },
        idade:{
            type:'number',
            require:true
        },
        email: {
            type:'string',
            require:true
        },
        pais: {
            type:'string',
            require:true
        }
    })

mongoose.model('usuarios', UserSchema )
const User = mongoose.model('usuarios')

new User({
    nome: 'jhon',
    sobrenome:'doe',
    idade: 55,
    email: 'jhon@gmail.com',
    pais: 'UK'
}).save().then( () =>{
    console.log('Usuarios cadastrados com sucesso')
} ).catch((erro) =>{
    console.log("Erro ao cadastrar usuarios"+erro)
})