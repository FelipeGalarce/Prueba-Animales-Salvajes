// Aqui Creo la Clase Padre Animal, junto con sus Constructores ademas de los setters y getters Solicitados
class Animal {
    constructor(name, age, img, comments, sound){
        var _name = name
        var _age = age
        var _img = img
        var _comments = comments
        var _sound= sound 
        this.getName = ()=> _name
        this.getAge = ()=> _age
        this.getImg = ()=> _img
        this.getSound= ()=> _sound 
        this.setComments = (newComment)=> _comments= newComment
        this.getComments = ()=> _comments
    }
    get name(){
        return this.getName();
    }
    get age(){
        return this.getAge();
    }
    get img(){
        return this.getImg();
    }
    get sound(){
        return this.getSound();
    }
    set comments(newComment){
        return this.setComments(newComment)
    }

}
// Aca Defino Todas las Clases Hijas, heredo los constructores, y asigno un funcion segun el sonido que emitan
class Aguila extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    chillar(){
        this.getSound()
    }


}
class Leon extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    rugir(){
        this.getSound()
    }


}
class Lobo extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    aullar(){
        this.getSound()
    }


}
class Oso extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    gruñir(){
        this.getSound()
    }


}
class Serpiente extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    sisear(){
        this.getSound()
    }


}
//Por Ultimo Aqui Exporto todas las Clases
export {Serpiente, Leon, Aguila, Lobo, Oso, Animal}