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

➡️ The following is an example of the required information for the `Startup CSS` deliverable

For this deliverable I properly styled the application into its final appearance.

- [x] **Header, footer, and main content body**
- [x] **Navigation elements** - Added horizontal navigation bar
- [x] **Responsive to window resizing** - My app looks great on all window sizes and devices
- [x] **Application elements** - Used good contrast and whitespace (Color scheme is still a work in progress)
- [x] **Application text content** - Consistent fonts
- [x] **Application images** - Thumbnail place holders for all needed images


