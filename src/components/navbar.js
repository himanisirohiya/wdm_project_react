import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav>
        <div class="nav-left">
            <ul >
                <li class="item"><a href="homepage.html">Home</a></li>
                <li class="item"><a href="aboutus.html">About-Us</a></li>
                <li class="item"><a href="blog.html">Blog</a></li>
            </ul>
        </div>
        <a class="logo">DIAZSIFONTES</a>
        <div class="nav-right">
            <ul class="user-login" style="display: flex;list-style-type: none;">
                <li><a href="loggedin.html">Member</a></li>
                <li><a href="admin.html">Admin</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}
