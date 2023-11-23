import NodeCache from 'node-cache';
import { checkPeriod } from './fetch-interval';

// stdTTL permet de définir le temps de vie d'une entrée dans le cache
// checkperiod permet de définir le temps entre chaque vérification de la validité des entrées
export const cache = new NodeCache({
	stdTTL: Infinity,
	checkperiod: checkPeriod,
});
