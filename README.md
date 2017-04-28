[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

  My idea is a backcountry planner (skiing, hiking, etc).
  At it's core there would be the ability to write a description of the trip
  plan, and a list of items to bring.
  I came up with it because a list seemed like a relatively straightforward,
  but useful, project and I already make lists on my own for these types of
  trips. In the first iteration there probably will only be the ability for each
  user to manage and view their own lists, but I hope that I can make it so
  that users can share their lists and multiple users can contribute to each
  list. Potentially anyone who likes the outdoors can use it, but I think people
  would actually find some of the additional functionality the most useful - eg.
  the ability to add multiple users to a trip, everyone's emergency contact info
  and the alerting features in the case of overdue users.

  Some features I would like to incorporate are:
  - planned start and end time
  - comment functionality for each list for general trip plans / discussion
  - ability to share to facebook
  - contact and emergency contact info for each user
  - ability to indicate what users will be wearing (TBD)
  - ability to mark status (eg. planning, in progress, delayed, cancelled,
  completed) (TBD)
  - ability to alert emergency contacts if users have not checked in by the end
  time. (TBD)
  - ability to copy a list for future trips (TBD)
  - multiple contributers for each list (TBD)
  - ability to upload a photo (TBD)
  - embedded relevant info based on the location (or links to relevant sites)
  such as weather, avalanche, trail info. (TBD)

## Write between 3-5 user stories

We have gone over this before. Please refer to your notes, previous repos or the
google machine if you need further assistance.
  - As a user I want to be able to create backcountry gear lists that are
  accessible via any internet connected device.
  - As a user I want to be able to create, save, update, delete, and share my
  lists.
  - As a user I want to reserve editing capabilities for my lists for myself
  (and potentially others that I allow).
  - As a user I want to be able to indicate the start and end time for the trip.
  - As a user I want to be able to store the plan along with the list.
  - As a user I want to share the plan to facebook.
  - As a user I want to be able to indicate emergency contacts.

## Plan your tables and columns

What tables will you need? What will the columns on the table be?
  - users
    - id
    - name
    - phone_number
    - email
    - password???
    - photo_id
    - emergency_contact_name
    - emergency_contact_phone_number
    - emergency_contact_email
  - items
      - id
      - item_name
      - item_description (TBD)
  - lists (TBD)
    - id
    - user_id
    - list_name
    - list_description
    - location
    - planned_start_time
    - planned_end_time
    - item_id
    - chat_id (TBD)
    - status (TBD)
  - chats (TBD)
    - id
    - comment
    - list_id
    - user_id

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your tables are related to one another.
(one to many, many to many, ect).
[imgur](http://i.imgur.com/tXpvzzw.jpg)

## Routing

What routes will you need to be able to make the proper request to your API?
  post '/sign-up' => 'users#signup'
  post '/sign-in' => 'users#signin'
  delete '/sign-out/:id' => 'users#signout'
  patch '/change-password/:id' => 'users#changepw'
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :lists, only: [:index, :show, :create, :update, :destroy]
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :chats, only: [:index, :show, :create, :update, :destroy]

## 3rd Party APIs

Do you plan to use any, if so what are they?
  Depending on how far I get, I may incorporate google maps, a weather api, or
  an avalanche forecast api, or some kind of location lookup api.

## Wireframes

Please create a wireframe of your planned front end.
[imgur](http://i.imgur.com/1N42xuh.jpg)

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.
  - Wireframes for the front end - Apr 20
  - Create an ERD - Apr 20
  - Create two repos - Apr 20
    - Use rails-api-template for back-end. It already includes authentication.
  - Create a simple front-end with HTML and CSS - Apr 21/22
  - Ensure your data model is appropriate for goals - Apr 21/22
  - Build the models and migrations to represent this data - Apr 22 - 28
  - Ensure all back-end endpoints work, before work on front end - Apr 28 - 30
  - Write front-end application - Apr 30 - May 2
  - Finish documentation - May 2, 6pm

# browser-template

A template for starting front-end projects. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.

## Structure

Dependencies are stored in [`package.json`](package.json).

Do not configure `grunt` packages directly in the
[`Gruntfile.js`](Gruntfile.js). Instead, store configurations in the
[`grunt`](grunt) directory. You won't need a top-level key, since that's
generated by the `Gruntfile.js` based on the filename of the configuration
object stored in the `grunt` directory.

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `config.apiOrigins.production` (and
`config.apiOrigins.development` if it differs from the default).  With
`apiOrigins` set, developers may rely on `config.apiOrigin` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss).

Developers should use [getFormFields](forms.md) to retrieve form data to send to
an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
-   `grunt reformat`: reformats all your code in a standard style
-   `grunt <server|serve|s>`: generates bundles, watches, and livereloads
-   `grunt test`: runs any automated tests, depends on `grunt build`
-   `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
