import mongoose from 'mongoose';
import {Stats} from "./stats";
import {Hitpoints} from "./hitpoints";

var characterSchema = new mongoose.Schema({
    type: {
        type: mongoose.Schema.ObjectId,
        ref: 'CharacterType'
    },
    playerId: String,
    xp: Number,
    level: Number,
    stats: Stats,
    hitpoints: Hitpoints
});

class CharacterClass {
    advance(amount) {
        this.xp += amount;
        this.checkLevel();
    }

    checkLevel() {
        const newLevel = this.calculateLevel();
        if (newLevel > this.level) {
            this.levelUp(newLevel-this.level);
        }
    }

    calculateLevel() {
        let level = 1;
        let nextLevel = 1000*level;
        while (this.xp>=nextLevel) {
            level++;
            nextLevel+=1000*level;
        }
        return level;
    }

    levelUp(number) {
        this.level += number;
        this.stats.vitality += number*this.type.growth.vitality;
        this.stats.aura += number*this.type.growth.aura;
        this.stats.technique += number*this.type.growth.technique;
        this.hitpoints.max = this.stats.vitality*10;
        this.hitpoints.current = this.stats.vitality*10;
    }
}

characterSchema.loadClass(CharacterClass);

export default mongoose.model('Character', characterSchema);