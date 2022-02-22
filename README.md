# Like-2-Laugh

### A deployed version of this app is available here: [Like2Laugh](https://like2laugh.herokuapp.com) 

#

 If you're looking the ultimate mood booster, you're exactly where you should be. Take a look through a library of jokes others have come up with, save the ones you find worth remembering for later, and even throw one of your own into the mix if you're up for it! We all need a pick-me-up sometimes, whether to take our eyes off something, clear our minds for a bit, or maybe just because we feel like it. After all, what's the harm in trying or worst it could possibly do, make you laugh? Start by clicking above and you'll be crackin' up in no time!

#

## Backend initialized with:

    rails new like-2-laugh-backend --database=postgresql --api 

## Frontend initialized with:

    npx create-react-app like-2-laugh-frontend

## Ruby Version  
   * 2.6.8
#

## Local Deployment Instructions

   All "run" instructions refer to in your terminal while actively in the root directory of this app, ```like-to-laugh-frontend```.
#

   1. Complete deployment instructions for the backend and be sure the rails server is running on port 3000.
#
   2.  Set an ENV variable called API by creating a file named `.env` in the root directory containing the following:

        `REACT_APP_API=http://localhost:3000`
#
   3. Next, install packages by running:
      
          npm install
#
   4. To avoid conflict with the backend server, force the port for the `npm start` command to listen on port 3001 by changing line 19 in [package.json](/package.json) 
      
       replace (existing): 
       
        `"start": "react-scripts start",` 
      
       with (new):
       
        `"start": "PORT=3001 react-scripts start",`
#
   5. Now in your terminal you can run:
          
          npm start

      - This should open the app in your browser to [http://localhost:3001](http://localhost:3001)

#
  6. If the last step didn't open the app in your browser automatically click [here](http://localhost:3001) to view the app it in your browser.

#
  7. ENJOY!😁
#
API Service / Preloaded Jokes: https://rapidapi.com/danruiyot/api/jokes10/ 

