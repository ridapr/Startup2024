# Startup2024


### Elevator Pitch
My website will be a site where users can login to rate and review any form of common media, like movies, TV shows, books, and video games. Users can simply leave a 0-5 star rating, or can leave a full review of the chosen media. Users will be able to see other users reviews, as well as see their history of past reviews and ratings on the users profile page. Using public APIs, when a user searches for media, it will pull the thumbnail, description, and other relevant info, syncing the review with the media, allowing all users to leave reviews on the same media


### Key Features
- Leave star ratings on all forms of common media
- Leave full length reviews
- See all of a users reviews on their profile page
- See friends recent activity


### Frontend and Backend
- **HTML** - Organize general website layout for homepage, login page, and profile page.
- **CSS** - Style page with modern look, with nice colors, effects, and layout.
- **Javascript/React** - Display ratings of media, allow ratings and reviews
- **Webservice** - Backend service with endpoints for submitting ratings, comparing users rankings, retrieves information about media using:
  - https://openlibrary.org/developers/api
  - https://www.omdbapi.com/
  - 
- **DB/Login** - Store users, alongside user data like rating history. Submitting reviews or ratings now allowed unless signed in.
- **WebSocket data** - Each user will be able to see others reviews and rankings.

## Professionally Rendered Website Mockups

### Home Page
![Home Page](https://github.com/ridapr/Startup2024/blob/main/Images/Home_Page.jpg)

### Profile page
![Profile Page](https://github.com/ridapr/Startup2024/blob/main/Images/Profile_Page.jpg)

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

- [x] **HTML pages** - 4 HTML pages. Index(login page), Home(Home page to browse), Profile(view a user's profile page and stats), Item(description of selected media to leave reviews)
- [x] **Links** - All pages have links to each other. Eventually, the Item link will be removed, accessible by selecting a movie on the Home page
- [x] **Text** - Each media have places for descriptions, release date, and other info on the Item page
- [x] **Images** - Currently I have uploaded placeholder images for the media thumbnails, which will eventually be replaced with posters/covers using an API
- [x] **DB/Login** - Input box and submit button for login. Media info will be pulled from database
- [x] **WebSocket** - Users will see other users reviews and the average ranking of a piece of media

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- [x] **Header, footer, and main content body**
- [x] **Navigation elements** - Added horizontal navigation bar
- [x] **Responsive to window resizing** - My app looks great on all window sizes and devices
- [x] **Application elements** - Used good contrast and whitespace (Color scheme is still a work in progress)
- [x] **Application text content** - Consistent fonts
- [x] **Application images** - Thumbnail place holders for all needed images

## React deliverable

For this deliverable I used JavaScript and React so that the application completely works for a single user. I also added placeholders for future technology.

- [x] **Bundled and transpiled** - done!
- [x] **Components** - Login, rankings, and reviews are all components with mocks for login, WebSocket.
  - [] **login** - When you press enter or the login button it takes you to the home page.
  - [x] **database** - Currently this is placeholders in the startup files, but it will be replaced with the database data later.
  - [x] **WebSocket** - Have placeholders for where reviews will be made and read. This will be replaced with WebSocket later.
- [x] **Router** - Routing between login and other pages on the nav bar is working

## Service deliverable

For this deliverable I added backend endpoints can receive and display test data. (This will be movie reviews and ratings in the future)

- [x] **Node.js/Express HTTP service** - done!
- [x] **Static middleware for frontend** - done!
- [x] **Calls to third party endpoints** - Added a quote at the top of the Home Page
- [x] **Backend service endpoints** - Placeholders for user reviews and ratings
- [x] **Frontend calls service endpoints** - I did this using the fetch function.

## DB/Login deliverable

For this deliverable I associate the reviews with the logged in user. I stored the reviews in the database.

- [x] **MongoDB Atlas database created** - Done
- [x] **Stores data in MongoDB** - Done
- [x] **User registration** - Creates a new account in the database.
- [x] **existing user** - Stores the votes under the same user if the user already exists.
- [x] **Use MongoDB to store credentials** - Stores both user and their votes.
- [x] **Restricts functionality** - Reviews can only be submitted by an authenticated user, and the Profile page is hidden until logged in

## WebSocket deliverable - PlaceHolder, not done yet

For this deliverable I used webSocket to update the votes on the frontend in realtime.

- [ ] **Backend listens for WebSocket connection** - done!
- [ ] **Frontend makes WebSocket connection** - done!
- [ ] **Data sent over WebSocket connection** - done!
- [ ] **WebSocket data displayed** - All user votes display in realtime