# Effectree 🟣
You will often find a problem like this asked to you by the interviewr. Under the hood, solution of these problems are built upon the simple fundamental knowledge of React. 

Let's understand the `Effectree` problem.

## The Problem Statement
Answer following with a ReactJS project:

- Create a component hierarchy like this:

  - Parent
  - ⬇️
  - Child
  - ⬇️
  - GrandChild

- Now add the useEffect hook to each of the component to run once.
- Add a `console.log` to each of the useEffect like, `I am the Parent`, `I am the Child`, so on.
- Now run the application.
- The Question is in which sequence(or order) the `useEffect(s)` will execute? 
  - [ ] Parent ➡️ Child ➡️ GrandChild
  - [ ] GrandChild ➡️ Child ➡️ Parent
  - [ ] Child ➡️ Parent ➡️ GrandChild
  - [ ] The order will be different everytime we run the app

## Expectations
- Clean code
- No unused state
- No unnecessary effects
- No unused imports
- Knowing how `useEffect` works!

## Solution
Here is the full length video explains the solution:

[![Effectree](./banner.png)](https://www.youtube.com/watch?v=aH8gKMjlX80 "Solution")


