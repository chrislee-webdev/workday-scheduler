# workday-scheduler

This project required the use of third-party APIs to create a workday scheduler.

This user is presented time blocks of a typical workday from 9AM to 5PM. Within each time block, the user should be able to enter/schedule an event. Teh user can then click on the save icon to save the event to localStorage after which, on a page reload, the event will still be shown and not deleted.

In addition, with the use of Moment.js, the time block are color coded. Gray for hours that have past, red for the current hour, and green for future hours. The colors will change arrodingly with the change in hours using Moment.js

Also, though not required, a clear calendar button was added to practice using the clearing out the localStorage.

<img width="1118" alt="Screen Shot 2022-04-09 at 9 27 06 PM" src="https://user-images.githubusercontent.com/52810667/162598526-3cdb4992-03e2-4575-9c92-e6b8c6d4b418.png">

<img width="1133" alt="Screen Shot 2022-04-09 at 9 28 01 PM" src="https://user-images.githubusercontent.com/52810667/162598557-3614d18e-dc7c-4a78-a5c2-a7402c71f4dc.png">
