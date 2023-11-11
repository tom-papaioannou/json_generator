export class Level {
    no: number;

    constructor(no: number) {
        this.no = no;
    }

    getLevel() {
        return {
            // Figure those values based on your algorithm
            no: this.no,
            roots: 1,
            rounds: 1
        };
    }
}