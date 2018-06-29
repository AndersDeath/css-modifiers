# CSS Modifiers

- This is css modifier generator.
- It writes on JavasScript.
- This is command line utility.
- Build system use Gulp.
# Usage
1. Clone this repository https://github.com/AndersDeath/css-modifiers
2. Install dependencies
      npm install
3. Run project
      gulp
4. Test Utility
      cd ./build
      ./cssmod --release
5. Copy CSS Modifiers from ./sass or ./css and use it in your project.


# List of CSS Modifiers
## Width percent

Range from 1% to 100% width.
Sourse example:

    .mod-w20p {
      width: 20%;
    }

Usage example:

    <div class="mod-w20p"></div>
## Width pixels

Range from 1px to 1280px width.
Sourse example:

    .mod-w20px {
      width: 20px;
    }

Usage example:

    <div class="mod-w20px"></div>
## Floats

Float right or float left modifiers
Sourse example:

    .mod-fl {
      float: left;
    }
    .mod-fr {
     float: right 
    }

Usage example:

    <div>
      <div class="mod-fl"></div>
      <div class="mod-fr"></div>
    </div>
# List of commands
      ./cssmod --release // build sass, css and css minify file
      ./cssmod --build // build only sass file
      ./cssmod --buildCss // build css and css minify files. (work only after ./css --build)
      ./cssmod --size --sass // show size of sass files
      ./cssmod --size --css // show size of css files
      ./cssmod --size --js // show size of cssmod utility

