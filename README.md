This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Start the app using 
- `npm run start` or `yarn start`

Run tests using
- `npm run test` or `yarn test`


## Problem Statement

This app is a React app where

- user can see Movie lists on homepage. By default, there will be no list.
- There is Add button on RHS of header, on click of which user should get navigated to AddMovie Form.
- User can perform 2 operations in AddMovie Form,
  1. fill the form details and submit. On click of submit, user will be navigate back to MovieList view, where the added movie details will get appended to already exixting list.
  2. on click of left arrow, user will be navigated back to MovieList, without any details saved.

You need to implement the following details for this assignment:

MovieList.js

1. By default, the MovieList shows no data. Handle this empty state by showing text - No movies found to display
2. The star icon should be of orange color.
3. The list should be sorted by ratings, in descending order.
4. Convert the movie name into a link (pointing to the website filled in form), on click, the link should open in new tab

AddMovieForm.js

1. Add change events for the form elements
2. All fields, except 'Website', are mandatory. Add mandatory validation for those.
3. Add below validations:

- Movie name should accept only alphabets
- url validation for website
- Submit button should be disabled unless all fields are valid

4. Fix the styles of the form, so that it looks presentable
5. Make the page responsive, so that the style does not break in mobile viewport
6. Make reusable component for input outside this file.

Add the test cases for below files. The tets suite has been created, you just need to check the description of each test case, and add assertions there

1. AddMovieForm.test.js
2. MovieList.test.js
3. FormHeader.test.js

Mandatory:

1. Do not use any thirdparty libraries for validations.
2. Use ES6 features extensively
3. Writing unit tests is mandatory

Good to have:

- Convert class components into fucntional components, wherever possible
- Use React hooks
- Make the app work with React Context to solve the problem of props drill
