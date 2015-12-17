#Home Supply Depot

Deployed front-end URL: http://baz1389.github.io/starcraft-front-end

To see the **back-end** repository, click [here](https://github.com/baz1389/starcraft-back-end).

##Description

StarCraft II (SC2) is a military science fiction real-time strategy video game developed and released by [Blizzard Entertainment](http://us.blizzard.com/en-us/). SC2 consists of three playable races: Terran, Protoss, and Zerg. Each race has their own unique units and abilities which can be built or aquired based on total available resources (minerals and vespene gas).

The competitive multi-player aspect of SC2 pits two players against each other with the intention of defeating the opposing army and defenses. Due to the plethora of available strategies involved in this game, numerous sites were created where e-sports professionals and average players alike could create strategy guides based on the race they were playing as and/or against. This single-page application is an iteration of one of these [sites](http://www.sc2builds.com/).

To learn more about SC2 please visit the official Blizzard [website](http://us.battle.net/sc2/en/) or the [Starcraft 2 Wiki](http://starcraft.wikia.com/wiki/StarCraft_II).

##User Stories and Wireframes

- A User can register, login, and logout
- A User can create a guide
- A User can view guides
- A User can edit guides they have created
- A User can delete guides they have created

- [Wireframes](http://imgur.com/a/Vm1jb)


##Technologies Used

###Node.js

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

###Express:

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile application.

###Passport

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

###Mongoose

Mongoose is used for elegant mongodb object modeling for node.js. Mongoose provides a straight-forward, schema-based solution to model application data. It includes built-in type casting, validation, query building, business logic hooks etc.

###MongoDB

It is a cross-platform document-oriented database.
Classified as a NoSQL database, MongoDB eschews the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON), making the integration of data in certain types of applications easier and faster.
MongoDB is free and open-source software.

###jQuery

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

###Javacript

JavaScript is a high-level, dynamic, untyped, and interpreted programming language. Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.

###Handlebars

A semantic web template system, started by Yehuda Katz in 2010. Handlebars.js is a superset of Mustache, and can render Mustache templates in addition to Handlebars templates. While Mustache is a logicless templating language, Handlebars adds extensibility and minimal logic, such as #if, #unless, #with, and #each helpers.

###HTML5

HTML5 is a markup language used for structuring and presenting content on the World Wide Web.

###CSS3

CSS3 is a style sheet language used for describing the presentation of a document written in a markup language.

###Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.


##Unsolved Problems

- The description display on the single-guide view isn't constructed how I'd like. Currently, anywhere there is a newline, a break tag (<br>) is inserted. It works for now, but I'd like to eventually create a new "steps" div/form where I have a predetermined structure of how the data is dispalyed opposed to hoping that the user gets it right on the first go around.

- Hiding edit and delete buttons for guides that weren't created by the current user.

##Major Hurdles

- Finally learning Handlebars.
- Making sure various aspect are working asynchronously.

##Future Additions

- Implement third party APIs

  - Blizzard SC2 leaderboard
  - Sharing guides on Twitter and/or Facebook

