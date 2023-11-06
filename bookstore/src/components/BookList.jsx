import React from 'react'
import "./BookList.css"

export default function BookList() {
  return (
    <div>
        <ul>
            <li>
                <p className="title">Bleach Manga</p>
                <p className="author">Tite Kubo</p>
            </li>
            <li>
                <p className="title">One Piece</p>
                <p className="author">Oda</p>
            </li>
            <li>
                <p className="title">Way Of Men</p>
                <p className="author">Andrew Kibe</p>
            </li>
        </ul>
    </div>)
}
