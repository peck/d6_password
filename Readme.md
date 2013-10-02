Quickly thrown together implementation of Diceware Passphrase(http://world.std.com/~reinhold/diceware.html) runable as a single page with no external needs. Single passphrase generation for less technical users.

Built with middleman framework, because I like it and otherwise maintenance would suck

#To Use

Save build/index.html (https://raw.github.com/peck/diceware_password/master/build/index.html) to your system, run from your browser, enjoy better pass phrases.

#To expand on

- have ruby installed
- have bundler installed
- bundle exec middleman s to run your server locally, uncomment the active :livereload line in config.rb to have it refresh page with file changes
- bundle exec middleman build to create the static files


#Contributing
Pull requests with other features/language support happily accepted. Code is simple and should be self explanatory in most cases

#Passphrase Strength
Built using the seedrandom library (https://github.com/davidbau/seedrandom) for better random number generation. Will use the window.crypto function on modern browsers that *should* be the best case, but honestly I'm not familiar enough with this aspect to comment. Went with what seemed to be most recommened, again pull requests accepted.

#License
BSD 3 clause where appropriate, code/right of others documented in their appropriate files
