 import React from 'react'
 import "./About.css"
 
 export default function Contact() {
   return (
     <div>
        <h2>Contact Us</h2>
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" type="text" ></textarea>
            <button type="submit">Submit</button>
        </form>
     </div>
   )
 }
 