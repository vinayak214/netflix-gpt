## Intalling tailwind into our App

- https://tailwindcss.com/docs/guides/create-react-app
  - Follow the Steps
- Installed Browser Router
  - npm i -D react-router-dom
- Build Login form
- Sign Up Form
- Form Validation
  - UseRef Hook

# Fire Base Authentication

- created project in FireBase
- configured with our project
- npm run build(To get production optimized code)
- Later firebase deploy( using command ====> firebase deploy)

  - 0.  Install firebase cli - 'npm install -g firebase-tools'
  - 1.  FireBase Login - firebase login
  - 2.  Initilize Firebase - `firebase init`=> select Hosting
  - 3.  Deploy Command - 'firebase deploy'

- # Create Sign Up user Account.
- 0.  follow the firebase documentation for Sign In and Sign Up APi.

- # Redux Setup

  - Redux for storing login informations(userSlice)
  - Updated profile
  - Implemented SignOut
  - unsubscribed to onAuth state callback

- # Movies list
  - Register TMDB API, create API KEY
  - Get NowPlaying data from TMDB Api
  - created custom hook for nowplaying movies
    - updated the nowplaying data into the store
  - created custom hook for trailer video
    - updated the store with trailer video data.
  - Embedded the youtube video and make it autoplay

# Features

- Login/Sign Up
  - Sign in/Sign up Form
  - redirect to Browse Page
- Browse(shows only After Authentication)
  - Header
  - Main Movie
  - Trailer in Background
  - Title and Description
  - Movie Suggestions
  - MovieLists \* N

-NetflixGPT

- Search Bar

- Movie Suggestions
