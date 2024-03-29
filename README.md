# angular_fe_app
=======

Personal project to learn the basics and experiment with Angular 2+ developement

All Front-end code is created by me, though the express API setup was through an online example used for convenience of use.

On local WSL located in:
wsl$/Ubuntu/home/donncha/fe-test-app

### Prerequisites
- Node 12+

### Set up

1. Clone this repo using your preferred method.
2. Install apps dependencies.
```
$ npm install
```
3. Run the Angular app. By default it will run in `http://localhost:4200`
```
$ npm start
```
4. Run the API app. By default it will run in `http://localhost:3000`
```
$ npm run start-api
```

## Useful docs

- Angular Material: see https://material.angular.io/
- ngx-datatable: see https://github.com/swimlane/ngx-datatable
- api docs https://documenter.getpostman.com/view/11918524/TzRNFAPs

---

## Todo

* ~~Fix inital compile error (only solution to this so far is triggering a recompile through a code edit while server is up, then refresh and page works)~~
* Improve error handling
* Add username validation against if it’s available in the database
    * How I would have approached it:
        * Check if a result is returned when i put in the ID of new user trying to be added via a subscribe(), if there was a result I should return an error toast
          Added Unit tests
* Added interfaces for the params on creating a user
* UI Improvements
* Make a translation functionality as mentioned in the doc, can make a sheet with labels i.e. json keys(labels) with values as translations as reference then make a filter Translate custom pipe custom pipe  that will check the selected language stored in cache or cookie too then get the correct value on the associated labels. Using docs called en.json fr.json es.json etc…
* Add a filter by system to filter on user details i.e. firstname, email. Username etc or filter by created after certain or before certain dates 
* Unit testing

current landing page design (uses randomly generated data saved in the db .json)
![image](https://user-images.githubusercontent.com/8567795/172498601-352f0efd-a6ee-4a8a-bd40-a35d7420450a.png)

