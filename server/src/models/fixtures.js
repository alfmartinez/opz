import fs from 'fs';
import CharacterType from './characterType';
import Profile from './profile';

export default {
    load() {
        const profiles = JSON.parse(fs.readFileSync(__dirname + '/data/profiles.json', 'utf-8'));
        Profile.collection.drop();
        Profile.insertMany(profiles);

        const types = JSON.parse(fs.readFileSync(__dirname + '/data/characterTypes.json', 'utf-8'));
        CharacterType.collection.drop();
        CharacterType.insertMany(types);
    }
}