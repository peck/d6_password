Quickly thrown together implementation of Diceware Passphrase(http://world.std.com/~reinhold/diceware.html) as a single page to be used offline with no external dependencies. Simple passphrase generation for less technical users.

Built with middleman framework, because I like it and otherwise maintenance would not be fun

#Passphrase Strength
Built using the seedrandom library (https://github.com/davidbau/seedrandom) for better random number generation. Will use the window.crypto function on modern browsers that *should* be the best case, but honestly I'm not familiar enough with this aspect to comment. Went with what seemed to be most recommened, pull requests welcome if this is a terrible mistake.


#To Use

Save build/index.html (https://raw.github.com/peck/diceware_password/master/build/index.html) to your system, run from your browser, enjoy better pass phrases.

#To expand on

- have ruby installed
- have bundler installed
- bundle exec middleman s to run your server locally, uncomment the active :livereload line in config.rb to have it refresh page with file changes
- bundle exec middleman build to create the static files

#Styling/Theme
Yes it includes bootstrap, yes its overkill for this project. Give it the same look without using bootstrap and send me a pull request, we can get really lean. Until then, at least I didn't include jquery.


#Contributing
Pull requests with other features/language support happily accepted. Code is simple and should be self explanatory in most cases

#Thanks
Hat tip to @thegrugq for pointing me at the algorithm and encouraging creation via twitter at 4am.

#License
BSD 3 clause where appropriate, code/right of others documented in their appropriate files
