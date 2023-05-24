
import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio';
import axios from 'axios';



const axiosInstance = axios.create({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com',
    timeout: 50000,
    headers: { Accept: 'application/json' },
});

// https://janmolak.com/node-js-axios-behind-corporate-proxies-8b17a6f31f9d
export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWebWithWebdriverIO.using(browser),
            CallAnApi.using(axiosInstance),
            TakeNotes.usingAnEmptyNotepad(),
        );
    }
}
