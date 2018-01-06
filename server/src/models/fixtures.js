import fs from 'fs';
import CharacterType from './characterType';
import Profile from './profile';
import Character from './character';

export default {
    load() {
        const profiles = JSON.parse(fs.readFileSync(__dirname + '/data/profiles.json', 'utf-8'));
        Profile.collection.drop();
        Profile.insertMany(profiles);

        const types = JSON.parse(fs.readFileSync(__dirname + '/data/characterTypes.json', 'utf-8'));
        CharacterType.collection.drop();
        CharacterType.insertMany(types).then(docs => {
            const typeMap = new Map(docs.map(item => [item.key, item._id]));
            const characters = JSON.parse(fs.readFileSync(__dirname + '/data/characters.json', 'utf-8'));
            Character.collection.drop();
            Character.insertMany(characters.map(({type, ...rest}) => ({...rest, type: typeMap.get(type)})));
        });



    }
}