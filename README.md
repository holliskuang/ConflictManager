## About

ConflictManager is a Chrome Extension that helps you manage your schedule and prevent any scheduling conflicts from occuring. 

## SetUp

1. The Extension exists in the Build section of this directory. You can try the extension out by Load Unpacking the Build Directory.

2. This Extension uses Google's OAuth2 to authorize the necessary scope for this extension to utilize. You will be prompted to log in through Google on when you first use the app.

## Behind the Scenes

This app connects with the Google Calendar API to determine whether a timeframe you have specified is already taken up in the calendar. Then you will be create a new event in your calendar if your specified timeframe is free.

## What is currently Implemented

1. A popup panel that takes in a Start Time, End Time, and Date. With this information, the timezone is automatically calculated through the browser and used to call the Google Cal API on whether your calendar is free at this time

2. Content Script which looks for the compose box in your gmail. It creates an icon (like you guys did in r2d2) which is meant to open up a panel(not yet figured out)

3. Background Script which listens for the Content Script Message to Open up a Panel

## Improvements/To Do

1. There are a lot of things which are still currently a work in progress for this extension. Among these are: 1. Aligning the functions to correctly call and take the API data from google cal's API. 2. Hiding credentials 4. Having a panel pop up when clicking on an icon(I liked how in r2d2, you have the little icon show up in text/compose boxes)I decided to stop work after 1 hour and 30 minutes. The recommended time was 1 hour and I figured that if I was taking a lot longer than expected, I may not be the candidate you are looking for in this role. 

2. Ideas to improve this are 1. AI functionalitty that will read in existing times in the compose text box and autopopulate the fields. That way you don't have to fill them out manually 2. Have the Extension Icon buddy appear in more than just gmail. I'm curious how you chose to do it with r2d2, it appears to show up in many different textboxes 


