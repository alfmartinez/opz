import fs from 'fs';
import CharacterType from './characterType';

export default {
    load() {
        const content = fs.readFileSync(__dirname + '/data/characterTypes.json', 'utf-8');
        console.log(content);
        const types = JSON.parse(content);
        CharacterType.insertMany(types);
    }
}