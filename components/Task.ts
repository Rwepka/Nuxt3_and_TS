class Student {
    constructor(
        private name: string,
        private age: number,
        private avg: number
    ){}
    public setName(name: string){
        this.name = name
    }
    public setAge(age: number){
        this.age = age
    }
    public setAvg(avg: number){
        this.avg = avg
    }
    sayStudent(){
        console.log(this)
    }
}
