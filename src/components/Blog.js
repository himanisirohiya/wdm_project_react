import React from 'react'
import { Navbar } from './navbar'
import Footer from './Footer/Footer'

export const Blog = () => {
  return (
    <>
      <Navbar />
      <main>
        <div class='blog'>
          <figure class='blogimage'>
            <div></div>
            <div>
              <h3>Aloe polyphylla Schönland ex Pillans</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>Endangered native of the Maluti Mountains…</p>
            </div>
          </figure>
        </div>
        <div class='blog'>
          <figure class='blogimage'>
            <div></div>
            <div>
              <h3>Aloe polyphylla Schönland ex Pillans</h3>
              <p>Endangered native of the Maluti Mountains…</p>
            </div>
          </figure>
        </div>
        <div class='blog'>
          <figure class='blogimage'>
            <div></div>
            <div>
              <h3>Aloe polyphylla Schönland ex Pillans</h3>
              <p>Endangered native of the Maluti Mountains…</p>
            </div>
          </figure>
        </div>
      </main>
      <Footer />
    </>
  )
}
