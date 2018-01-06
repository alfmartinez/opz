import operations from './operations';
import arcs from './arcs';
import characters from './characters';
import profiles from './profiles';

export default {
    ...characters,
    ...arcs,
    ...operations,
    ...profiles
}