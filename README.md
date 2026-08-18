Movie Library

A modern and responsive Movie Library Management System built with
React, Vite, Tailwind CSS, React Router DOM, Redux Toolkit, Axios, and
the OMDb REST API. The application provides movie discovery, movie
search, movie details, user authentication, protected routes, and
personal movie collection management through a clean component-based
architecture.

🚀 Features

🎬 Display Popular Movies in Responsive Cards

🔍 Search Movies by Title

📖 Read Full Movie Details

🖼️ Display Movie Posters with Fallback Handling

✨ Hover Interaction for Additional Movie Information

➕ Add Movies to Personal Collection

🗑️ Remove Movies from Collection

📚 View Saved Movie Collection

🔐 Login and Logout Functionality

🛡️ Protected Routes for Authenticated Users

💾 Persist User and Collection Data using Local Storage

🔔 Toast Notifications for User Actions

✅ API Response and Error Handling

📱 Responsive Design

🧩 Reusable React Components

⚡ Fast Development with Vite

🎨 Modern Dark UI using Tailwind CSS

🧭 Client-side Navigation using React Router

⚠️ Loading and Error States

🛠️ Tech Stack

Frontend

React

Vite

Tailwind CSS

React Router DOM

JavaScript

HTML5

CSS3

State Management

Redux Toolkit

React Redux

Redux Slices

Redux Store

API / Data Layer

OMDb REST API

Axios

Separate API service layer

Browser Local Storage

Authentication / UI

Client-side authentication flow

Protected routes

React Toastify

Development Tools

ESLint

Vite Build System

VS Code

Git / GitHub

📂 Project Structure

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── MovieList.jsx
│   ├── MovieSearch.jsx
│   ├── ResultCard.jsx
│   ├── ResultGrid.jsx
│   ├── PrivateRoute.jsx
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Search.jsx
│   ├── Login.jsx
│   ├── Details.jsx
│   ├── CollectionPage.jsx
│   └── ...
│
├── redux/
│   ├── actions/
│   │   └── movieActions.js
│   │
│   ├── features/
│   │   └── collectionSlice.js
│   │
│   ├── reducers/
│   │   └── ...
│   │
│   └── store.js
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css

⚙️ Installation

Clone the repository:

git clone <repository-url>

Move into the project folder:

cd movie-library

Install dependencies:

npm install

Create an environment file in the project root.

For a Vite project:

VITE_OMDB_API_KEY=YOUR_OMDB_API_KEY

Start the development server:

npm run dev

The application will usually be available at:

http://localhost:5173/

📦 Available Scripts

Run Development Server

npm run dev

Build Production Version

npm run build

Preview Production Build

npm run preview

Run ESLint

npm run lint

🎯 Core Modules

Movie Management

Fetch popular/discovery movies

Search movies

Read individual movie information

Display movie posters

Display release year and movie type

Navigate to movie details

Handle unavailable posters

Movie Search

The search module allows the user to enter a movie name and retrieve
matching movies from the OMDb API.

The search process is:

Search Input
     ↓
Search Action
     ↓
Axios Request
     ↓
OMDb API
     ↓
Search Response
     ↓
Redux State
     ↓
Search Results

Movie Details

The movie details module displays information for a selected movie using
its IMDb ID.

The movie ID is obtained from the route:

/movie/:imdbID

The details page can use that ID to request the corresponding movie
information from the API.

Movie Collection

Users can maintain a personal collection of movies.

Collection operations include:

Add movie

Remove movie

Check whether a movie already exists

Display saved movies

Persist collection data

🔄 Movie API Operations

The application communicates with the OMDb API using HTTP requests.

Operation                HTTP Method   Purpose

Search Movies            GET           Finds movies matching a search query
Movie Details            GET           Retrieves information about one movie
Popular/Initial Movies   GET           Retrieves the initial movie list

Example API parameters:

s       → Search term
i       → IMDb movie ID
type    → movie
apikey  → OMDb API key

🔌 API Service Layer

API configuration is separated from React components.

Example location:

src/services/api.js

The Axios instance contains the OMDb base URL and API key configuration.

A typical configuration is:

import axios from "axios";

const api = axios.create({
    baseURL: "https://www.omdbapi.com/",
    params: {
        apikey: import.meta.env.VITE_OMDB_API_KEY,
    },
});

export default api;

Keeping API configuration separate prevents individual components from
repeatedly creating API clients and keeps network logic organized.

API Flow

React Page
    ↓
Redux Action
    ↓
API Service
    ↓
Axios
    ↓
OMDb REST API
    ↓
API Response
    ↓
Redux Reducer / Slice
    ↓
React Component
    ↓
Updated UI

🧭 Application Routes

The application uses React Router for client-side navigation.

Typical routes include:

/                    → Home / Popular Movies
/search              → Search Movies
/login               → Login
/movie/:imdbID       → Movie Details
/collection          → Saved Movie Collection

Protected pages are wrapped with PrivateRoute.

For example:

User
  ↓
PrivateRoute
  ↓
Authenticated?
  ├── Yes → Page
  └── No  → Login

React Router allows navigation without a complete browser page reload.

🔐 Authentication

The application contains a basic client-side authentication system.

The login process stores user information in browser local storage and
updates the Redux authentication state.

Login Flow

Login Form
    ↓
Email + Password
    ↓
loginUser()
    ↓
Redux LOGIN Action
    ↓
Authentication State
    ↓
localStorage
    ↓
Navigate to Home

Logout Flow

Logout
    ↓
logoutUser()
    ↓
Remove movieUser from localStorage
    ↓
Redux LOGOUT Action
    ↓
User becomes unauthenticated

The authentication system is intended for educational purposes. It is
not production-grade authentication because authentication information
should not rely only on client-side local storage in a real application.

🛡️ Protected Routes

Private pages are protected using a reusable PrivateRoute component.

The purpose of PrivateRoute is to prevent unauthenticated users from
directly accessing application pages.

Example flow:

Request /movie/tt1234567
          ↓
      PrivateRoute
          ↓
   Is user logged in?
       ↙       ↘
     Yes        No
      ↓          ↓
 Movie Details  Login

🗃️ Redux State Management

Redux is used to manage shared application state.

The movie state contains information such as:

popularMovies
searchResults
movieDetails
loading
error

The authentication state contains information such as:

isAuthenticated
user

The collection state manages saved movies.

Redux Flow

Component
    ↓
dispatch(action)
    ↓
Redux Action
    ↓
API / Logic
    ↓
Reducer or Slice
    ↓
Redux Store
    ↓
useSelector()
    ↓
Component UI

This architecture keeps application state centralized and predictable.

🎬 Movie Actions

Movie actions are responsible for communicating between UI components,
the API, and Redux.

Examples include:

fetchPopularMovies()
searchMovies(query)
fetchMovieDetails(imdbID)

The actions normally handle three stages:

REQUEST
   ↓
API Call
   ↓
SUCCESS / FAILURE

For example:

FETCH_MOVIES_REQUEST
        ↓
      API
     ↙   ↘
SUCCESS  FAILURE
   ↓        ↓
Movies     Error

🧩 Reusable Components

The application uses reusable React components instead of placing all UI
logic inside pages.

Navbar.jsx

Provides the application's main navigation.

Depending on authentication state, it can display:

Unauthenticated:
Home | Search | Login

Authenticated:
Home | Search | User Email | Logout

The navbar is fixed so that navigation remains available while
scrolling.

MovieList.jsx

Displays a collection of movies in a responsive grid.

Each movie can contain:

Poster

Title

Year

Movie type

Navigation to details

ResultCard.jsx

Represents an individual movie result.

The card can display movie information and collection actions without
duplicating the same UI code across multiple pages.

ResultGrid.jsx

Displays multiple movie results using reusable movie cards.

PrivateRoute.jsx

Controls access to protected application pages.

CollectionPage.jsx

Displays movies saved by the user.

📝 Movie Card

The movie card is designed to provide quick information without opening
the details page.

Typical information includes:

Movie Poster
     ↓
Movie Title
     ↓
Release Year
     ↓
Movie Type
     ↓
Additional / Hover Information

Hover interactions can reveal additional information or actions while
keeping the normal card layout compact.

🖼️ Image Handling

Movie posters are supplied by the OMDb API.

The application checks whether the poster is valid.

If a valid poster exists:

Movie.Poster
     ↓
Display <img>

If the API returns:

N/A

or the image fails to load, a fallback UI is displayed.

This prevents broken image elements from negatively affecting the movie
grid.

⚠️ Loading and Error States

The application handles API states explicitly.

Loading

While data is being retrieved:

Loading movies...
Searching movies...

Error

If an API request fails:

Error: <error message>

Empty Results

If a search does not return movies:

No movies found

This gives users clear feedback instead of leaving the interface blank.

📱 Responsive Design

The application is designed for:

Desktop

Laptop

Tablet

Mobile

The movie grid adapts to the available screen size.

Example:

Mobile   → 2 columns
Tablet   → 3 columns
Desktop  → 4–5 columns

Tailwind CSS responsive utility classes are used throughout the
application.

🧱 File Responsibilities

main.jsx

Entry point of the React application. It mounts the root React component
and loads the global CSS.

App.jsx

Defines the main application structure and React Router configuration.
It also triggers the initial movie data loading.

Navbar.jsx

Provides fixed navigation and changes its displayed controls based on
authentication state.

Home.jsx

Displays the main movie library and popular movies.

Search.jsx

Provides the movie search interface and displays search results.

Login.jsx

Provides the login form and handles the login workflow.

Details.jsx

Displays complete information about a selected movie.

CollectionPage.jsx

Displays movies saved to the user's personal collection.

MovieList.jsx

Renders a responsive collection of movie cards.

ResultCard.jsx

Displays a reusable individual movie result and its actions.

ResultGrid.jsx

Organizes movie result cards into a responsive grid.

PrivateRoute.jsx

Protects routes that require authentication.

movieActions.js

Contains Redux actions and asynchronous API operations related to
movies.

movieReducer.js / Movie Slice

Stores movie-related state and handles request, success, and failure
states.

authReducer.js / Auth Slice

Stores authentication state and handles login/logout actions.

collectionSlice.js

Manages the user's saved movie collection and collection actions.

store.js

Combines Redux state and creates the application's central Redux store.

api.js / mediaApi.js

Contains API configuration and separates external API communication from
UI components.

📊 Application Flow

Load Movies

Application Starts
      ↓
App.jsx
      ↓
fetchPopularMovies()
      ↓
Axios
      ↓
OMDb API
      ↓
Movie Data
      ↓
Redux Store
      ↓
MovieList / ResultGrid

Search Movie

Search Page
    ↓
Enter Movie Name
    ↓
Search Button
    ↓
searchMovies(query)
    ↓
GET OMDb API
    ↓
Search Results
    ↓
Redux State
    ↓
ResultGrid

View Movie Details

Movie Card
    ↓
Click / Open Details
    ↓
/movie/:imdbID
    ↓
PrivateRoute
    ↓
Details Page
    ↓
Movie API Request
    ↓
Movie Information

Add Movie to Collection

Movie Card
    ↓
Add to Collection
    ↓
collectionSlice
    ↓
Update Redux State
    ↓
localStorage
    ↓
Collection Page

Remove Movie

Collection Page
    ↓
Remove Movie
    ↓
Redux Action
    ↓
Update Collection
    ↓
localStorage
    ↓
Updated Collection UI

Login

Login Page
    ↓
Email + Password
    ↓
loginUser()
    ↓
LOGIN Action
    ↓
Redux Authentication State
    ↓
localStorage
    ↓
Home Page

🧠 React Concepts Used

useState

Used for local component state such as:

Search query

Form values

Loading-related UI

Error messages

Local interaction state

useEffect

Used for side effects such as:

Fetching initial movie data

Loading movie details

Synchronizing application state

useSelector

Used to read Redux state from React components.

Example:

const { popularMovies, loading, error } = useSelector(
    (state) => state.movies
);

useDispatch

Used to send Redux actions from React components.

Example:

dispatch(fetchPopularMovies());

useParams

Used to read the IMDb ID from the movie details route.

Example:

/movie/:imdbID

Props

Reusable components receive movie data and event handlers through props.

Example:

<ResultCard
    movie={movie}
    onAdd={handleAdd}
/>

🧩 Component Reusability

The application avoids duplicating movie UI wherever possible.

For example:

Search Results
      +
Popular Movies
      +
Collection
      ↓
Reusable Movie Card

This makes the project easier to maintain and allows changes to movie
card design to be made in one place.

💾 Local Storage

Browser local storage is used for persistent client-side data.

The application can store:

movieUser
collection

This allows information to survive a browser refresh.

However, local storage is not a secure database and should not be used
for sensitive information in production applications.

🔒 API Security Note

The OMDb API key is required by the application.

For Vite, an environment variable can be configured as:

VITE_OMDB_API_KEY=YOUR_OMDB_API_KEY

Important: Vite VITE_* variables are included in the client-side
bundle. Therefore, the API key should not be considered a true secret
after deployment.

For a production application, API access should ideally be handled
through a backend or serverless API.

📌 Assignment Requirements

React-based Movie Library

API integration

Movie search

Movie details

Redux state management

Reusable components

React Router navigation

Protected routes

Login/logout functionality

Personal movie collection

Responsive UI

Loading and error handling

Local storage persistence

README documentation

⚠️ API Note

The project uses the OMDb API for movie data. API availability, daily
request limits, poster URLs, and returned movie information depend on
the API provider.

The application demonstrates the complete frontend workflow for
retrieving, searching, displaying, and managing movie information.

👨‍💻 Author

Bansi Dashani

Web Developer | React Developer

🔗 Project Links


Project Explanation Video

👉 Explanation Video:

<https://drive.google.com/file/d/1X4Adf7ufFr99cVuXXhOpFb7F7Yq6n3Tf/view?usp=sharing>

Project Demo / Screen Recording

👉 Project Demo:

<https://drive.google.com/file/d/1caVXbBr8r7ve0K_KHhp4JFSNwDz1zsLr/view?usp=sharing>

📸 Project Screenshot

Add the project screenshot to the repository and update the filename
below:

![Movie Library Screenshot](![alt text](image.png))

📄 License

This project is created for educational and assignment purposes.
