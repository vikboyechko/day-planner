# Day Planner

This app utilizes jQuery, DOM traversal, and local storage for a light weight script that enables planning a day's schedule and to-do's.

## Challenges

There are many ways to target DOM elements, and it took me several iterations to break my code down and simplify it so that everything works while the code is easy to read.

Comparing the current hour via dayJS to the HTML hour element ID took a few stabs at parsing. I knew I could easily change the CSS IDs to "9," "10," and so on, but I wanted to challenge myself to use a split method, as often in a client environment I may not have the opportunity to change the HTML structure, and I also wanted to avoid changing the HTML to make my JavaScript job easier.

![Day Planner Screenshot](/assets/images/work-day-scheduler-screenshot.jpg)

The Work Day Planner can be seen here: [Work Day Planner](https://vikboyechko.github.io/day-planner)