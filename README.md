# Components Practice Projects

**Project 1: Multi-Page Website for eadev.org**

**Step 1: Set Up the Project**

1. Create a new React app using Create React App or your preferred method.
2. Organize your project structure by creating separate files for components.

**Step 2: Header Component**

1. Create a `Header.js` component.
2. In `Header.js`, display the organization's logo as an image.
3. Style the header with CSS:

```css
/* Header.css */
header {
  background-color: #1E90FF; /* Header background color (Dodger Blue) */
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
2. In `NavigationBar.js`, add navigation links for "Home," "About Us," "Events," "Resources," and "Contact."
3. Style the navigation links with CSS:

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
  color: #1E90FF; /* Hover color (Dodger Blue) */
}
```

**Step 4: HomePage Component**

1. Create a `HomePage.js` component.
2. In `HomePage.js`, provide a welcoming message such as "Welcome to eadev.org" and a brief introduction like "Empowering Aspiring Developers."
3. Style the content with CSS:

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
```

Example Content for HomePage Component:
```jsx
function HomePage() {
  return (
    <div>
      <h2>Welcome to eadev.org</h2>
      <p>Empowering Aspiring Developers</p>
      {/* Add more content and calls to action here */}
    </div>
  );
}
```

**Step 5: AboutUs Component**

1. Create an `AboutUs.js` component.
2. In `AboutUs.js`, describe eadev.org as a community of passionate developers coming together to learn, share, and grow. Share the organization's mission and vision.
3. Style the content with CSS:

```css
/* AboutUs.css */
h2 {
  text-align: center;
  font-size: 30px;
  color: #1E90FF; /* Heading color (Dodger Blue) */
  margin-top: 20px;
}

p {
  text-align: center;
  font-size: 16px;
  color: #444; /* Text color (Dark Gray) */
  margin: 20px;
}
```

Example Content for AboutUs Component:
```jsx
function AboutUs() {
  return (
    <div>
      <h2>About Us</h2>
      <p>eadev.org is a community of passionate developers coming together to learn, share, and grow.</p>
      {/* Add more details about the organization */}
    </div>
  );
}
```

Continuing with steps 6 to 9 and adding example content:

**Step 6: Events Component**

Example Content for Events Component:
```jsx
function Events() {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        <li>Workshop on React.js - October 10, 2023</li>
        <li>Web Development Hackathon - November 5, 2023</li>
      </ul>
      {/* Add more event details and registration links */}
    </div>
  );
}
```

**Step 7: Resources Component**

Example Content for Resources Component:
```jsx
function Resources() {
  return (
    <div>
      <h2>Coding Resources</h2>
      <ul>
        <li>
          <a href="https://eadev.org/tutorials">Tutorials</a>
        </li>
        <li>
          <a href="https://eadev.org/coding-challenges">Coding Challenges</a>
        </li>
      </ul>
      {/* Add more resource links and descriptions */}
    </div>
 

 );
}
```

**Step 8: Contact Component**

Example Content for Contact Component:
```jsx
function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <ContactForm />
      {/* Add contact information and social media links */}
    </div>
  );
}
```

**Step 9: Footer Component**

Example Content for Footer Component:
```jsx
function Footer() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} eadev.org
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
    </footer>
  );
}
```

For each step, create the corresponding CSS files (e.g., Header.css, NavigationBar.css, etc.) and apply the provided CSS styles to the components. This will help you achieve the desired appearance for your "eadev.org" multi-page website.
