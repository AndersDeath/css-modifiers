# CSS Modifiers

- This is css modifier generator.
- It writes on JavasScript.
- This is command line utility.
- Build system use Gulp.
# Usage
1. Clone this repository https://github.com/AndersDeath/css-modifiers
2. Install dependencies


       $ npm install


3. Run project


       $ gulp


4. Test Utility


       $ cd ./build
       $ ./cssmod --release


5. Copy CSS Modifiers from ./sass or ./css and use it in your project.


# List of CSS Modifiers
----------
## Width percent

Range from 1% to 100% width.
Sourse example:

    .mod-w20p {
      width: 20%;
    }

Usage example:

    <div class="mod-w20p"></div>
----------
## Width pixels

Range from 1px to 1280px width.
Sourse example:

    .mod-w20px {
      width: 20px;
    }

Usage example:

    <div class="mod-w20px"></div>
----------
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
----------
## Fonts

Fonts properties list:

----------

font-weight:

- .mod-f-w-bold === font-weight: bold
- .mod-f-w-bolder === font-weight: bolder
- .mod-f-w-lighter === font-weight: lighter
- .mod-f-w-normal === font-weight: normal
- .mod-f-w-100 === font-weight: 100
- .mod-f-w-200 === font-weight: 200
- .mod-f-w-300 === font-weight: 300
- .mod-f-w-400 === font-weight: 400
- .mod-f-w-500 === font-weight: 500
- .mod-f-w-600 === font-weight: 600
- .mod-f-w-700 === font-weight: bolder
- .mod-f-w-800 === font-weight: 800
- .mod-f-w-b900 === font-weight: 900
----------

font-variant

- .mod-f-v-normal === font-weight: normal
- .mod-f-v-small-caps === font-weight: small-caps
----------

font-style

- .mod-f-st-italic === font-style: italic
- .mod-f-st-oblique === font-style: oblique
----------

font-stretch 

- .mod-f-str-ultra-condensed === font-stretch: ultra-condensed
- .mod-f-str-extra-condensed === font-stretch: extra-condensed
- .mod-f-str-condensed === font-stretch: condensed
- .mod-f-str-semi-condensed === font-stretch: semi-condensed
- .mod-f-str-normal === font-stretch: normal
- .mod-f-str-semi-expanded === font-stretch: semi-expanded
- .mod-f-str-expanded === font-stretch: expanded
- .mod-f-str-extra-expanded === font-stretch: extra-expanded
- .mod-f-str-ultra-expanded === font-stretch: ultra-expanded
----------

font-size
Range from 1px to 100px font-size (example: .mod-f-s-10px or .mod-f-s-76px)

Sourse example:

    .mod-f-s-99px {
      font-size: 99px;
    }
    
    .mod-f-str-extra-expanded {
     font-stretch: extra-expanded
    }

Usage example:

    <div class="mod-f-s-99px">Example</div>
    <div class="mod-f-str-extra-expanded">Example</div>
# List of commands
      $ ./cssmod --release // build sass, css and css minify file
      $ ./cssmod --build // build only sass file
      $ ./cssmod --buildCss // build css and css minify files. (work only after ./css --build)
      $ ./cssmod --size --sass // show size of sass files
      $ ./cssmod --size --css // show size of css files
      $ ./cssmod --size --js // show size of cssmod utility

