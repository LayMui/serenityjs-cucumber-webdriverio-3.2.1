import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio';

export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWebWithWebdriverIO.using(browser),
            CallAnApi.at(process.env.WEATHER_SERVICE_BASE_URL),
            TakeNotes.usingAnEmptyNotepad(),
        );
    }
}
