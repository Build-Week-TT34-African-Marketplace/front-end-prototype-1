# African Marketplace

## Using the website

Deployed project link: https://african-marketplace-six.vercel.app/

This is the front-end of the African Marketplace app built by tt_webft_34 for the build week of 11/13/20 to 11/20/20.

This project is designed to function as a centralized, online marketplace on which small business owners can post items for sale or purchase requests. Anyone who navigates to the link above can see the items listed on the "Home" (`/`) page, but only users who have logged in may add an item to the listing. To establish login credentials, a user must first sign up in the `/signup` page ("Sign Up" on the nav bar). Signing up will add the user's credentials to the back-end, at which point the user may log in at `/login` ("Log in" on the nav bar).

The [back-end](https://github.com/LambdaSchoolBuildWeeks/african-marketplace) was taken from another version of the same project, by a past Lambda student, because our back-end was not working. Given the delays associated with this glitch in our production, there are certain minor bugs, pertaining to the communication between the front- and back-ends, all of which bugs only occur for new users who have just visited the site for the first time. If the user is not accessing the site from an incognito window, all bugs will disappear after the initial sign up and login. Another avenue for further refinement of this version of the project, in addition to ironing out the above-mentioned bugs, would be to ensure that a user is not logged out immediately upon refreshing the page.

There is plenty of room for extension of and iteration on this project (e.g., contact between users, styling and polish, storing of information), so feel free to do with that what you can.

## Using the repository locally

1. Fork
2. `git clone https://github.com/Build-Week-TT34-African-Marketplace/front-end-prototype-1.git`
3. `npm install`
4. `npm start`

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
