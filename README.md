

Dev Stack Builder

Dev Stack Builder is an interactive web application that allows developers to explore, filter, and curate their ideal tech stack. Users can browse various tools, libraries, and frameworks across different categories, view detailed specifications, and build a custom list of technologies tailored for their next project.


*Tech Stack sed

Frontend: React.js, JavaScript (ES6+)
Styling: Tailwind CSS, DaisyUI
Build Tool: Vite
Notifications: React-Toastify
Data Handling: Local JSON



*Key Features

Interactive Tech Directory:Browse 10+ tech tools categorized by Frontend, Backend, Database, Styling, DevOps, and more.
Custom Stack Management: Add or remove technologies to/from a personal stack sidebar with real-time state updates, duplicate prevention, and instant alert notifications.
Responsive & Adaptive UI: Fully optimized layout for mobile, tablet, and desktop devices featuring a unified gradient brand theme.

React Conceptual Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It is used in React because it makes components easier to read and design.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component and cannot be changed by the child. State is data stored inside a component and it can be updated when needed.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data in a functional component. In this project, I used it to manage the selected technologies and the loading state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used for side effects like fetching data. I used it to load the JSON data after the component was rendered.

5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in the list. This makes updating and rendering the list more efficient.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. In this project, it was used to show a message when no technologies were selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can send data back by calling a function that was passed from the parent.
