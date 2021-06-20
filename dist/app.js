"use strict";
// class Man {
//     constructor (
//         public name: string,
//         public speed: number,
//         )
//         {}
//         getInfo(){
//             console.log('name', this.name);
//             console.log('speed', this.speed);
//         }
// }
// class SpiderMan extends Man {
// constructor (
//     public name: string,
//     public speed: number,
//     )
//     {
//         super(name,speed);
//     }
//     spiderBiteMan(): void{
//         console.log(`${this.name} tech run fast`)
//     }
// }
// let user = new SpiderMan('Vlad', 25);
// user.spiderBiteMan(); 
// user.getInfo();
// class Man {
//     constructor (
//         protected name: string,
//         public speed: number,
//         )
//         {}
//         getInfo(){
//             console.log('name', this.name);
//             console.log('speed', this.speed);
//         }
// }
// class ChildrenMan extends Man {
//     constructor (
//         protected name: string,
//         public speed: number,
//         ) {
//             super(name, speed)
//         }
//         getName() : string {
//             return this.name;
//         }
// }
// let user = new ChildrenMan('Vlad', 25);
// console.log('name', user.getName())
// class EA {
//     constructor (
//         public game : string,
//     ) {}
//     create() : void {}
// }
// class Fifa extends EA {
//     constructor (
//         public game : string,
//     ) {
//         super(game);
//     }
//     create() {
//         console.log('Создали спортивную игру')
//     }
// }
// class Sims extends EA {
//     constructor (
//         public game : string,
//     ) {
//         super(game);
//     }
//     create() {
//         console.log('Создали игру симулятор')
//     }
// }
//# sourceMappingURL=app.js.map