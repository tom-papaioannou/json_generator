import { Round } from "./round";

export class Level {
    level: number;
    reward: number;
    rounds: Array<Round>;

    constructor(level: number) {
        this.level = level;
        this.reward = 1;
        // Calculate rounds from level
        this.rounds = new Array<Round>();

        for(let x = 1; x < (this.level + 1); x++){
            let round: Round = new Round(x);
            this.rounds.push(round);
        }
    }

    getLevel() {
        return {
            // Figure those values based on your algorithm
            level: this.level,
            reward: this.reward,
            rounds: this.rounds
        };
    }
}