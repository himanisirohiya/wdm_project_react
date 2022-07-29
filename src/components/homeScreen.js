import React from 'react'
import {Navbar} from './navbar'

const HomeScreen = () => {
  return (
    <>
    <Navbar />
    <section>
        <div class="centered">
            <section class="flashcards">  
                <article class="card">
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article> 
                {/* card-one  */}
                <article class="card">
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
                {/* <!-- /card-two --> */}
                <article class="card">
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
                {/* <!-- /card-three --> */}
            </section>
        </div>
    </section>
    <footer>
        <ul class="footer-links-left">
            <li class=""><a href="contactus.html">Contact-Us</a></li>
        </ul>
		<ul class="footer-links-right">
			<li class=""><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li class=""><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li class=""><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li class=""><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
            <li class=""><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
		</ul>
    </footer>
</>
  )
}

export default HomeScreen