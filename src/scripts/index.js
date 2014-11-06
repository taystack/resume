(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
ga('send', 'pageview');

var EXP = {
  "agile": {
    title: "Agile Methodology",
    links: [],
    bits: "I have spent my entire web development career in an Agile " +
          "development process. I spent my first year at Concordus " +
          "Applications Inc. developing within a <strong>Scrum</strong> " +
          "environment. The gears shifted towards a <strong>Kanban</strong> " +
          "process as more developers were added and defined teams began " +
          "surfacing. By the end of my second year, the company adapted a " +
          "hybrid <strong>Scrum / Kanban</strong> methodology and it worked " +
          "well for us."
  },
  "backbone": {
    title: "Backbone.js Framework",
    links: ["chaplin", "live", "coffee", "html5", "css3", "jade", "git", "rest", "jquery"],
    bits: "Backbone.js is a great web application framework. I learned the " +
          "Backbone.js architecture from using Chaplin.js, a framework " +
          "built on top of Backbon.js. I have used Backbone.js and it's " +
          "counterpart, <a href='https://github.com/paulmillr/exoskeleton'" +
          "target='_blank'" +
          ">Exoskeleton.js</a> for most of my web developing experience and " +
          "find that these tools have very useful model/collection event " +
          "bindings and JSON data formats."
  },
  "bower": {
    title: "Bower Package Manager",
    links: ["jquery", "node", "npm", "git"],
    bits: "Bower is, by far, the easiest way to install frontend " +
          "dependencies. I use bower for this website only because it feels, " +
          "I dunno, `gross` to download jQuery from the jQuery site. " +
          "Call me a diva, but I just won't do it. Besides, open source " +
          "package management is good practice for a clean stack."
  },
  "chaplin": {
    title: "Chaplin.js Framework",
    links: ["backbone", "javascript", "live", "coffee", "git", "traceur"],
    bits: "I had the privelage of working under a maintainer of " +
          "<a href='https://github.com/chaplinjs/chaplin' target='_blank'" +
          ">Chaplin.js</a> during my introduction to web development. " +
          "Chaplin.js is a great application framework for SPA's, large " +
          "and small, and I've used it many, many times. I've even had the " +
          "opportunity to speak at a " +
          "<a href='http://www.meetup.com/sacramento-single-page-apps/events/" +
          "145166832/?action=detail&eventId=145166832' target='_blank'" +
          ">meetup</a> at our local Sacramento, Ca " +
          "<a href='http://hackerlab.org/' target='_blank'>Hacker Lab</a> " +
          "covering the power of Chaplin.js as a framework for speed and " +
          "performance freaks. If faced with the challenge of using " +
          "an already existing REST API in a web application, I would " +
          "probably choose to put Chaplin.js into the stack."
  },
  "coffee": {
    title: "CoffeeScript",
    links: ["backbone", "chaplin", "sublime", "git", "javascript"],
    bits: "My introduction to JavaScript was in the form of CoffeeScript. " +
          "I spent a lot of time compiling CoffeeScript into JavaScript " +
          "using a really handy plug-in from Sublime Text before I trusted " +
          "writing / compiling chunks of this stuff without looking. As an " +
          "abstraction layer for JavaScript, it makes writing in the " +
          "language feel more elegant. Having white-space sensitivity also " +
          "creates a more unified look between coders, essentially forcing " +
          "the author to make readable code, even if it's terrible."
  },
  "css3": {
    title: "Cascading Style Sheets (CSS3)",
    links: ["backbone", "chaplin", "scss", "git", "html5"],
    bits: "I heart this stuff. This is where the lines merge between art and " +
          "math, and the fastest way for a browser to understand what the " +
          "heck it's supposed to show you. With JavaScript, HTML5, and CSS3, " +
          "I can make just about anything you can think of. This website was " +
          "created with Sass using grunt-contrib-sass for compilation. My " +
          "favorite feature of CSS3 is flex-box. I use flex-box for the " +
          "layout of this website since it is no longer in need of a " +
          "<a href='http://caniuse.com/#feat=flexbox' target='_blank'>" +
          "webkit</a> for the most current browsers. We don't like to count " +
          "IE10. It's different from Win7 - Win8 - Win8.1. Windows? Hmm..." +
          "Besides, > 65% of all browsers don't need a prefix and I don't " +
          "have a client base for this website. And flex is, well, " +
          "<a href='https://github.com/taystack/flexy', target='_blank'>" +
          "flexy</a>."
  },
  "django": {
    title: "Django Python",
    links: ["python", "jinja", "flask", "git", "rest", "sqlalchemy"],
    bits: "Django was my introduction to a RESTful backend architecture. Of " +
          "course Django has a templating engine to offer, it is just not " +
          "as useful as writing a frontend stack for it. I am mostly used " +
          "to dealing with the model layer of a Django app and have built " +
          "a couple test apps using a full Django / Chaplin.js stack"
  },
  "docker": {
    title: "Docker",
    links: ["linux"],
    bits: "Docker is the only place where I have seen a man run the most " +
          "infamous Linux command: `rm -rf /` and still be able to recover " +
          "the shell with the `docker run so_and_so_container.*`. " +
          "Docker was incorporated into the start-up I am working for when " +
          "the sys-admin decided to take antoher job. We needed a way to " +
          "maintain an inexpensive web infrastructure without compromising " +
          "the build process or stack. I am familiar with the process of " +
          "running / saving / pulling / pushing Docker containers and the " +
          "build process was done by the architect."
  },
  "flask": {
    title: "Flask Framework",
    links: ["python", "jinja", "scss", "git", "rest", "sqlalchemy"],
    bits: "I have used Flask for a couple of applications. I favor Flask for " +
          "applications with a heavy backend presence. Flask is a super " +
          "documented, BSD licensed framework and that makes developing " +
          "small web applications as easy as it can get. Flask is also very " +
          "useful for exposing a RESTful backend to a more elegant SPA " +
          "like Chaplin.js for a very powerful, very complicated stack. If " +
          "I had to make a quick RESTful application over night, Flask " +
          "would be there to comfort me."
  },
  "git": {
    title: "Git Revision Tool",
    links: ["python", "javascript", "css3", "html5", "bower", "linux", "sublime"],
    bits: "I have used Git for every project I have been a part of in my " +
          "professional career. I have a <a href='https://github.com/taystack" +
          "' target='_blank'>GitHub</a> account, in which I toss interesting " +
          "projects, but " +
          "have also used Atlassian products like Bit Bucket and Stash " +
          "because of their integration value towards Jira, our workflow " +
          "manager. Every software tool I have used involved Git, which is " +
          "why you see the git icon on almost every tab. This webpage is " +
          "hosted for free on <i>GitHub Pages</i> and you can find the " +
          "source <a href='https://github.com/taystack/resume/tree/gh-pages'" +
          "target='_blank'>here<a>."
  },
  "grunt": {
    title: "Grunt.js Task Runner",
    links: ["git", "npm", "linux", "css3", "scss", "html5", "jade", "haml", "javascript", "coffee", "live"],
    bits: "Grunt.js is the most powerful side-arm I have as a frontend / " +
          "JavaScript developer. I use grunt for this website to compile " +
          "my .haml and .scss files into .html and .css files respectfully. " +
          "I use Grunt.js in every project besides pure Flask applications."
  },
  "haml": {
    title: "Haml Templates",
    links: ["backbone", "chaplin", "css3", "git", "coffee"],
    bits: "I have used haml more than any templating abstraction. I fell in " +
          "love with the white space delimited files and the open source " +
          "projects that supported it. I totally prefer using Grunt.js " +
          "to compile my Haml files as opposed to writing pure HTML, but " +
          "much rather prefer the power of Jade templates."
  },
  "html5": {
    title: "HyperText Markup Language (HTML)",
    links: ["backbone", "chaplin", "haml", "jade", "jinja", "git"],
    bits: "HTML can be very nice to use when cleaned up with an abstraction " +
          "layer or other sweet templating engine. I spend most of my time " +
          "inside Haml templates but have come to appreciate other markup " +
          "languages like, Jade, and Jinja which also allow a variety of " +
          "logic from the application architecture's native language. This " +
          "website was created with Haml using grunt-haml for compilation."
  },
  "jade": {
    title: "Jade Templates",
    links: ["backbone", "chaplin", "jinja", "git", "html5"],
    bits: "Jade is my favorite templating engine. I have used Jade in only " +
          "one application and already love it more than Haml. For larger " +
          "projects, Jade would be in my stack."
  },
  "javascript": {
    title: "JavaScript",
    links: ["backbone", "chaplin", "live", "coffee", "traceur", "git"],
    bits: "I have coded in javascript or some other abstraction layer more " +
          "than any other coding / scripting language. Learning JavaScript " +
          "(es5) came to me by way of learning  CoffeeScript and LiveScript. " +
          "My first raw JavaScript web application was written well after my " +
          "involvement with multiple production-level CoffeeScript / " +
          "LiveScript Backbone.js / Chaplin.js apps. " +
          "The most recent applications I have worked " +
          "on are utilizing the bleeding-edge JavaScript (es6) syntax. This " +
          "specific website was written using plain ol' JavaScript (es5)."
  },
  "jinja": {
    title: "Jinja 2 Templates",
    links: ["python", "flask", "css3", "git", "html5", "django"],
    bits: "I totally dig the power of Jinja 2 templates. I have used these " +
          "templates for a couple of Flask applications so far. " +
          "I love the macros available and things that are DRY are handsome."
  },
  "jquery": {
    title: "jQuery",
    links: ["backbone", "chaplin", "javascript", "git", "rest", "html5", "css3", "bower"],
    bits: "There is much to say about this tool. " +
          "I've used jQuery in every web site / application I have ever spent " +
          "time on. I've used AJAX in Flask apps. I've used AJAX in " +
          "Chaplin.js apps. I used jQuery in this web site."
  },
  "live": {
    title: "LiveScript",
    links: ["backbone", "chaplin", "sublime", "git", "javascript"],
    bits: "My favorite JavaScript abstraction layer so far. LiveScript is " +
          "almost identical to CoffeeScript. I just prefer typing `.ls` over " +
          "`.coffee` for every file that contains script. That's it. I can " +
          "code just as well in either one."
  },
  "linux": {
    title: "Linux Operating System",
    links: ["git", "node", "grunt", "docker"],
    bits: "I heard once that if you are a designer and don't use a Mac, you " +
          "will get laughed at. Pretty much the same goes for developers. " +
          "If you don't develop on a Linux box, you will get laughed " +
          "at. The number of dev tools readily available for Linux machines " +
          "is amazing. " +
          "Getting the same developing environments running on Windows or Mac" +
          "is possible, but it's janky and the edge cases are silly. Since " +
          "professional web application development, I use windows strictly " +
          "for testing IE or gaming. Since " +
          "<a href='https://saucelabs.com/docs/code-examples' target='_blank'" +
          ">Sauce Labs</a> I haven't seen a need to use more than one " +
          "machine for developing."
  },
  "npm": {
    title: "Node Package Manager (NPM)",
    links: ["node", "bower", "javascript", "rest", "grunt"],
    bits: "I remember that day the " +
          "<a href='https://twitter.com/TaylorStackpole/status/397512558279544832' target='_blank'" +
          ">NPM servers went down...</a> That was the first, and only, day " +
          "I used Twitter. I use NPM every time I make a project. Requiring " +
          "dependencies is very easy with this tool, and I use it for this " +
          "website to gather all of my Grunt.js packages. NPM should be in " +
          "every frontend stack."
  },
  "node": {
    title: "Node.js",
    links: ["javascript", "html5", "css3", "git", "linux", "flask", "bower"],
    bits: "I use node to run a web server for any RESTful application's " +
          "frontend. I have used node to listen on ports exposed " +
          "by Flask applications to allow for serious backend / frontend " +
          "teams to focus on their own repos for project revision."
  },
  "python": {
    title: "Python",
    links: ["rest", "flask", "jinja", "sqlalchemy", "django", "git"],
    bits: "My first experience with the Python scripting language " +
          "was with Python Django. Later, in different applications, " +
          "I was exposed to SQLAlchemy as a database modeling layer. " +
          "Throughout this time, I had to have a basic understanding of " +
          "Python, but, it wasn't until the start-up I am working for " +
          "decided to pause frontend development until some backend " +
          "components were finished. I took it upon myself to learn " +
          "Python in the worst way. I found an unfinished API layer " +
          "for the HighriseHQ CRM, " +
          "<a href='https://github.com/seibert-media/Highton'>Highton.</a> " +
          "The project only had most GET methods. In " +
          "one weekend I implemented POST, PUT, and DELETE methods, as " +
          "well as finished the GET/<id> methods. The experience was " +
          "a success, and that monday I was ready for the shift in focus " +
          "towards a Python / API working environment. The most Python " +
          "work I have done involves writing custom API layers for " +
          "enterprise applications exposing a REST API."
  },
  "rest": {
    title: "Representational State Transfer (REST)",
    links: ["python", "flask", "sqlalchemy", "git", "django", "chaplin", "backbone"],
    bits: "My introduction to API's was during my interview at Concordus " +
          "Applications. I have dealt with REST API's from numerous " +
          "enterprise companies. I have also contributed to a Python API " +
          "layer for Basecamp's HighriseHQ. I am confident that I can " +
          "write a custom Python API layer for just about any REST API."
  },
  "ruby": {
    title: "Ruby",
    links: ["haml", "git"],
    bits: "The first two weeks of working with Concordus Applications was " +
          "spent working on peripheral in-house applications. The most " +
          "pronounced was a clock-in / out " +
          "<a href='http://rubyonrails.org/' target='_blank'>" +
          "Rails</a> app. My goal was to read the available API for a list " +
          "of clock events and display columns where there was data and " +
          "no UI. After the two weeks I had moved on to work on the more " +
          "important Chaplin powered CRM where I ended up being the frontend " +
          "lead on."
  },
  "scss": {
    title: "Syntactically Awesome Stylesheets (sass)",
    links: ["jinja", "haml", "git", "jade", "grunt"],
    bits: "I have written every single stylesheet in my life using sass " +
          "with Grunt.js for compilation / watching files. I would rather " +
          "cut off my own foot that write inline CSS. I utilize the power " +
          "of mixins, inheritance, and even the logic avenues of Sass to " +
          "accomplish a DRY appearance in the development of stylesheets."
  },
  "sqlalchemy": {
    title: "SQLAlchemy",
    links: ["python", "flask", "git", "rest", "django"],
    bits: "SQLAlchemy plays very well with the Flask architecture for the  " +
          "resource layer. My introduction to SQLAlchemy was with Flask" +
          "app where I wrote API layers that mapped out to generic models " +
          "for integration mapping between Enterprise level applications " +
          "exposing a RESTful API."
  },
  "traceur": {
    title: "Google ES Traceur Compiler",
    links: ["backbone", "chaplin", "javascript", "live", "coffee", "git"],
    bits: "This is like looking into the future. There are some proposed " +
          "changes to the JavaScript language and this compiler allows " +
          "someone to compile JavaScript ES6 into browser-compatible ES5." +
          "I like to consider the Google ES6 Compiler an abstraction layer " +
          "on JavaScript until ES6 is common place in browser compatibility. " +
          "Of all of the JavaScript abstraction layers, " +
          "I have used the Traceur Compiler with Chaplin.js since importing " +
          "was a one line thing. This " +
          "abstraction layer defines `bleeding edge`."
  },
  "sublime": {
    title: "Sublime Text",
    links: ["git",
            "python",
            "css3",
            "scss",
            "html5",
            "jinja",
            "haml",
            "jade",
            "javascript",
            "live",
            "coffee"],
    bits: "I will never use another text editor again. Ever."
  },
};

var _isCurrent = function(name) {
  if ($(".exp-detail").prop("data-name") === name) {
    // Go away.
    return true;

  } else {

    // Save the hash of related items.
    var hash = EXP[name];

    // Wipe the reference images.
    $(".detail-container").fadeOut(function() {
      $(".detail-link-item").remove();

      $(".exp-detail").prop("data-name", name);

      $(".detail-title").text(hash.title);

      var src = "src/images/" + name + ".png";
      $(".detail-img").attr("src", src);

      $(".detail-bits").html(hash.bits);

      for (var _i = 0; _i < hash.links.length; _i++) {
        $(".detail-links-list").append(
            "<li class='detail-link-item'>" +
            "<img title='" + EXP[hash.links[_i]].title + "' src='src/images/" +
              hash.links[_i] + ".png' " +
            "data-name='" + hash.links[_i] + "'/>" +
            "</li>"
          );
      }
      $(".detail-container").fadeIn();

    });
  }
};

var _makeDetails = function(name) {

  $.smoothScroll({scrollTarget: "#exp-top"});

  if (_isCurrent(name)) {
    // Go away.
    return;
  }

};

$(function() {

  $(".container").on("click", function() {
    var name = $(this).attr("data-hmm");
    ga("send", "event", "button", "click", "exp-tile" + name);
    $(".exp-detail").addClass("curious");
    _makeDetails(name);
    switch ($(this).find(".container").hasClass("active")) {
      case true:
        break;

      case false:
        $(".container.active").removeClass("active");
    }
    $(this).addClass("active");
  });

  $(".detail-links-list").on("click", ".detail-link-item > img", function(event) {
    var name = $(this).attr("data-name");
    ga("send", "event", "button", "click", "exp-link" + name);
    $(".container").removeClass("active");
    $("[data-hmm=" + name + "]").addClass("active");
    _makeDetails(name);
  });

  $(".expand-container").on("click", function() {
    ga("send", "event", "button", "click", "exp-larger");
    $(".exp-detail").addClass("ness");
    $.smoothScroll({scrollTarget: "#exp-top"});
  });
});
