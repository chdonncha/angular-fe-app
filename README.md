# fe-test-app
=======
# EXADS Frontend Test Project

This project is intended to be used as a base for the EXADS Frontend Test. It includes:
- Empty Angular 8 app with required dependencies for Angular Material and Ngx Datatable already set up.
- API to support the frontend app.


## Getting started

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

## Need more help?

- Angular Material: see https://material.angular.io/
- ngx-datatable: see https://github.com/swimlane/ngx-datatable
- API docs: see https://documenter.getpostman.com/view/11918524/TzRNFAPs

---

## What I would have done had I more time

* Improve error handling
* Add username validation against if it’s available in the database
    * How I would have approached it:
        * Check if a result is returned when i put in the ID of new user trying to be added via a subscribe(), if there was a result I should return an error toast
          Added Unit tests
* Added interfaces for the params on creating a user
* Make a translation functionality as mentioned in the doc, can make a sheet with labels i.e. json keys(labels) with values as translations as reference then make a filter Translate custom pipe custom pipe  that will check the selected language stored in cache or cookie too then get the correct value on the associated labels. Using docs called en.json fr.json es.json etc…
* Add a filter by system to filter on user details i.e. firstname, email. Username etc or filter by created after certain or before certain dates 
