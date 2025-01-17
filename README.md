# NextJS Idea-Board

## Contents
[description](#description)
[usage](#usage)
[development](#development)
[contributions](#contributions)


## description
I created an Idea-Board for recording your ideas onto a website. For this project I mostly just focused on getting familiar with nextjs and serverless databases. While I am happy with what I was able to build please note that I built it in about a week so its far from perfect. I did however learn a lot about nextjs and how to call a database that's hosted by neon and vercel. 

## usage
when the website loads on the home page is your Idea board. There you can see all the ideas stored in the database. If you click on the new idea link it will take you to a form where you can enter the information for a new idea. If you click delete on the card component the idea will be deleted from the database and the page will reload. I have a link for an about page but I haven't added code for that quite yet. This website is deployed on vercel but the page currently shows as not found. To test the functionality of the website pull the code down and start the application using the dev script. Make sure to run npm install or pnpm install first. 

## development
Developing this site i started by using the create-nextjs-project-name in order to set up a baseplate for the application. I started by coding the home page, along with a card component. The next step was setting up the database and seeding it with sample data. To do this I deployed on vercel and added a database for the project. Next I created sql queries to seed the database and then to get all the data from it. The code can be found in the seed folder as well as the home page. Then I created sql queries to add and delete from the database. Initially i created the queries in lib/data.ts but I kept running into an issue with CORS authorization. The only workaround I found was to use an api fetch request instead of just database queries. 

## contributions
This was just a simple website to get my hands dirty with nextjs. Clearly it could be polished up. I also keep running into an issue with it showing invalid date instead of the actual date it was created on. I fixed it once but it appears to have come back. I think it has something to do with the New Date() function and types. I might continue working on this project, but again it really was just to explore nextjs and I feel I was able to do that. When I get the hang of some more advanced features with nextjs I might come back and try them out!