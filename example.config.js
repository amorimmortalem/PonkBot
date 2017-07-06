/*!
**|   Example Configuration
**@
*/

'use strict';

module.exports = {
    ponk: {
        useflair : true,
        peers    : ['OtherBot'],
    },
    commands: {
        disabled  : ['vodka','taco'],
        trigger   : /^\.|^\!/,
        ignorelog : ['8ball'],
    },
    sync: {
        host : 'cytu.be',
        port : '443',
        user : 'MyNewBot',
        auth : 'MyNewBotsPassword',
        chan : 'MyAwesomeCyTubeChannel',
        pass : 'DeleteThisIfYouChannelHasNoPassword',
    },
    db: {
        client     : 'sqlite3',
        connection : { filename: 'ponkbot.db' },
    },
    webhost: {
        secret   : 'JustRandomlySmashYourKeyboard',
        weblink  : 'http://mycheap.vps',
        webport  : 'somePortImNotUsing',
        sockport : 'someOtherPortImNotUsing',
    },
    api: {
        youtube      : 'MyYouTubeAPIkey',
        wolfram      : 'MyWolframAPIkey',
        wunderground : 'MyWUndergroundAPIkey',
        cleverbot    : 'MyCleverBotAPIkey',
    }
}
