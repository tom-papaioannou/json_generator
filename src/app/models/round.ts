import { Flower } from "./flower";

export class Round{
    round: number;
    flowers: Array<Flower>;

    constructor (round: number) { 
        this.round = round;
        this.flowers = new Array<Flower>();

        for(let x = 1; x < (this.round + 1); x++){
            let flower = new Flower(x);
            this.flowers.push(flower);
        }
    }
}