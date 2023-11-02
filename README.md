# Components Practice Projects

**Project 1: Multi-Page Website for eadev.org**

**Step 1: Set Up the Project**

1. Create a new React app using Create React App or your preferred method.
2. Organize your project structure by creating separate files for components.

**Step 2: Header Component**

1. Create a `Header.js` component.
2. In `Header.js`, display the organization's logo as an image.
3. Style the header with CSS.

**Header.css:**
```css
/* Header.css */
header {
  background-color: #1E90FF;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  max-width: 150px;
}
```

**Step 3: NavigationBar Component**

1. Create a `NavigationBar.js` component.
2. In `NavigationBar.js`, add navigation links for "Home," "About Us," "Events," "Resources," and "Contact."
3. Style the navigation links with CSS.

**NavigationBar.css:**
```css
/* NavigationBar.css */
nav {
  display: flex;
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: #333;
  margin-right: 20px;
  font-weight: bold;
}

a:hover {
  color: #1E90FF;
}
```

**Step 4: HomePage Component**

1. Create a `HomePage.js` component.
2. In `HomePage.js`, provide a welcoming message and a brief introduction.
3. Style the content with CSS.

**HomePage.css:**
```css
/* HomePage.css */
h2 {
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-top: 20px;
}

p {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}
```

**Step 5: AboutUs Component**

1. Create an `AboutUs.js` component.
2. In `AboutUs.js`, describe eadev.org as a community of passionate developers coming together to learn, share, and grow. Share the organization's mission and vision.
3. Style the content with CSS.

**AboutUs.css:**
```css
/* AboutUs.css */
h2 {
  text-align: center;
  font-size: 30px;
  color: #1E90FF;
  margin-top: 20px;
}

p {
  text-align: center;
  font-size: 16px;
  color: #444;
  margin: 20px;
}
```

**Step 6: Events Component**

1. Create an `Events.js` component.
2. In `Events.js`, list upcoming events and workshops, e.g., "Workshop on React.js - October 10, 2023" and "Web Development Hackathon - November 5, 2023."
3. Style the event list with CSS.

**Events.css:**
```css
/* Events.css */
h2 {
  text-align: center;
  font-size: 30px;
  color: #1E90FF;
  margin-top: 20px;
}

ul {
  list-style-type: disc;
  text-align: center;
  font-size: 18px;
  color: #333;
  margin: 20px;
}

li {
  margin: 10px 0;
}
```

**Step 7: Resources Component**

1. Create a `Resources.js` component.
2. In `Resources.js`, provide links to coding tutorials, resources, and challenges, e.g., "Tutorials" and "Coding Challenges" with URLs.
3. Style the links with CSS.

**Resources.css:**
```css
/* Resources.css */
h2 {
  text-align: center;
  font-size: 30px;
  color: #1E90FF;
  margin-top: 20px;
}

ul {
  list-style-type: square;
  text-align: center;
  font-size: 18px;
  color: #333;
  margin: 20px;
}

li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: #1E90FF;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
```

**Step 8: Contact Component**

1. Create a `Contact.js` component.
2. In `Contact.js`, add a "Contact Us" heading and a contact form with fields for name, email, and message.
3. Style the contact form with CSS.
4. Provide contact information and links to social media profiles.

**Contact.css:**
```css
/* Contact.css */
h2

 {
  text-align: center;
  font-size: 30px;
  color: #1E90FF;
  margin-top: 20px;
}

form {
  text-align: center;
  font-size: 16px;
  color: #333;
  margin: 20px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #1E90FF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0072E3;
}
```

**Step 9: Footer Component**

1. Create a `Footer.js` component.
2. In `Footer.js`, display the copyright notice using "&copy;" and the current year along with "eadev.org." Add links to the privacy policy and terms of service.
3. Style the footer with CSS.

**Footer.css:**
```css
/* Footer.css */
footer {
  text-align: center;
  background-color: #1E90FF;
  padding: 10px;
  color: white;
  font-size: 14px;
}

a {
  text-decoration: none;
  color: white;
  margin: 0 10px;
}

a:hover {
  text-decoration: underline;
}
```

By following these step-by-step instructions and using the provided content and CSS, you can create a multi-page website for "eadev.org." Remember to customize the content and styles to your specific project requirements.


Of course, let's create another project to practice JSX and components. This time, we'll build a simple online bookstore website with multiple components. We'll provide detailed step-by-step instructions and example content for each component.

**Project 2: Online Bookstore Website**

**Step 1: Set Up the Project**

1. Create a new React app using Create React App or your preferred method.
2. Organize your project structure by creating separate files for components.

**Step 2: Header Component**

1. Create a `Header.js` component.
2. In `Header.js`, display the website's logo and navigation links.
3. Style the header with CSS.

**Header.css:**
```css
/* Header.css */
header {
  background-color: #FFA500; /* Header background color (Orange) */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  max-width: 150px; /* Adjust the logo size as needed */
}
```

**Step 3: NavigationBar Component**

1. Create a `NavigationBar.js` component.
2. In `NavigationBar.js`, add navigation links for "Home," "Books," "Categories," "About," and "Contact."
3. Style the navigation links with CSS.

**NavigationBar.css:**
```css
/* NavigationBar.css */
nav {
  display: flex;
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: #333; /* Text color (Dark Gray) */
  margin-right: 20px;
  font-weight: bold;
}

a:hover {
  color: #FFA500; /* Hover color (Orange) */
}
```

**Step 4: HomePage Component**

1. Create a `HomePage.js` component.
2. In `HomePage.js`, provide a welcome message and a featured book.
3. Style the content with CSS.

**HomePage.css:**
```css
/* HomePage.css */
h2 {
  text-align: center;
  font-size: 36px;
  color: #333; /* Text color (Dark Gray) */
  margin-top: 20px;
}

p {
  text-align: center;
  font-size: 18px;
  color: #555; /* Text color (Medium Gray) */
  margin-top: 20px;
}

.book {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.book img {
  max-width: 200px; /* Adjust the book image size as needed */
}
```

**Step 5: BookList Component**

1. Create a `BookList.js` component.
2. In `BookList.js`, list multiple books with their titles and authors.
3. Style the book list with CSS.

**BookList.css:**
```css
/* BookList.css */
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Display 3 books in a row */
  gap: 20px;
  padding: 0;
}

li {
  border: 1px solid #ccc; /* Gray border */
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

li:hover {
  background-color: #FFA500; /* Hover background color (Orange) */
}
```

**Step 6: Categories Component**

1. Create a `Categories.js` component.
2. In `Categories.js`, list book categories.
3. Style the categories list with CSS.

**Categories.css:**
```css
/* Categories.css */
ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

li {
  margin: 10px 0;
  font-weight: bold;
}

li a {
  text-decoration: none;
  color: #333; /* Text color (Dark Gray) */
}

li a:hover {
  color: #FFA500; /* Hover color (Orange) */
}
```

**Step 7: About Component**

1. Create an `About.js` component.
2. In `About.js`, provide information about the bookstore and its mission.
3. Style the content with CSS.

**About.css:**
```css
/* About.css */
h2 {
  text-align: center;
  font-size: 30px;
  color: #FFA500; /* Heading color (Orange) */
  margin-top: 20px;
}

p {
  text-align: center;
  font-size: 16px;
  color: #444; /* Text color (Dark Gray) */
  margin: 20px;
}
```

**Step 8: Contact Component**

1. Create a `Contact.js` component.
2. In `Contact.js`, add a "Contact Us" heading and a contact form with fields for name, email, and message.
3. Style the contact form with CSS.
4. Provide contact information and links to social media profiles.

**Contact.css:**
```css
/* Contact.css */
h2 {
  text-align: center;
  font-size: 30px;
  color: #FFA500; /* Heading color (Orange) */
  margin-top: 20px;
}

form {
  text-align: center;
  font-size: 16px;
  color: #333; /* Text color (Dark Gray) */
  margin: 20px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 5px;
}

button {
  background-color: #FFA500; /* Button background color (Orange) */
  color: white; /* Button text color */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #FF8C00; /* Hover color (Slightly darker orange) */
}
```

**Step 9: Footer Component**

1. Create a `Footer.js` component.
2. In `Footer.js`, display the copyright notice using "&copy;" and the current year along with the website name. Add links to the privacy policy and terms of service.
3. Style the footer with CSS.

**Footer.css:**
```css
/* Footer.css */
footer {
  text-align: center;
  background-color: #FFA500; /* Footer background color (Orange) */
  padding: 10px;
  color: white; /* Text color (White) */
  font-size: 14px;
}

a {
  text-decoration: none;
  color: white; /* Link color (White) */
  margin: 0

 10px;
}

a:hover {
  text-decoration: underline;
}
``` 
