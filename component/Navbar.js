import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import { Container } from 'postcss'
const Navbar = () => {
  return (
    <div>
      		<header className={styles.nav}>
			<div className= "nav__holder nav--sticky">
				<div className={styles.Containe}>
					<div className="flex-parent">

						<div className="nav__header">
							
							<a href="index.html" className="logo-container flex-child">
								{/* <Image  className="logo" src="img/logo.png" srcset="img/logo.png 1x, img/logo@2x.png 2x" alt="logo"> */}
                <Image src="" alt="" />
              </a>

							
							<button type="button" className="nav__icon-toggle" id="nav__icon-toggle" data-toggle="collapse" data-target="#navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="nav__icon-toggle-bar"></span>
								<span className="nav__icon-toggle-bar"></span>
								<span className="nav__icon-toggle-bar"></span>
							</button>
						</div>

						<nav id="navbar-collapse" className="nav__wrap collapse navbar-collapse">
							<ul className="nav__menu">
								<li className="nav__dropdown active">
									<a href="index.html" aria-haspopup="true">Home</a>
									<i className="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul className="nav__dropdown-menu">
										<li><a href="index.html">Home 1</a></li>
										<li><a href="index-2.html">Home 2</a></li>
										<li><a href="index-3.html">Home 3</a></li>
										<li><a href="index-4.html">Home 4</a></li>
									</ul>
								</li>
								<li className="nav__dropdown">
									<a href="#" aria-haspopup="true">Pages</a>
									<i className="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul className="nav__dropdown-menu">
										<li><a href="about.html">About</a></li>
										<li><a href="services.html">Services</a></li>
										<li><a href="single-service.html">Single Service</a></li>
										<li><a href="contact.html">Contact</a></li>
									</ul>
								</li>
								<li className="nav__dropdown">
									<a href="#" aria-haspopup="true">Works</a>
									<i className="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul className="nav__dropdown-menu">
										<li><a href="portfolio.html">Portfolio</a></li>
										<li><a href="portfolio-gallery.html">Portfolio Gallery</a></li>
										<li><a href="portfolio-single.html">Portfolio Single</a></li>
									</ul>
								</li>
								<li className="nav__dropdown">
									<a href="#" aria-haspopup="true">Features</a>
									<i className="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul className="nav__dropdown-menu">
										<li><a href="icons.html">Icons</a></li>
										<li><a href="elements.html">Elements</a></li>
									</ul>
								</li>
								<li className="nav__dropdown">
									<a href="blog.html" aria-haspopup="true">Blog</a>
									<i className="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul className="nav__dropdown-menu">
										<li><a href="blog-masonry.html">Blog Masonry</a></li>
										<li><a href="blog.html">Blog Standard</a></li>
										<li><a href="single-post.html">Single Post</a></li>
									</ul>
								</li>
							</ul> 
							<div className="nav__phone nav__phone--mobile d-lg-none">
								<span className="nav__phone-text">Call us:</span>
								<a href="tel:1-800-995-3959" className="nav__phone-number">1-800-995-3959</a>
							</div>

							<div className="nav__socials nav__socials--mobile d-lg-none">
								<div className="socials">
									<a href="#" className="social social-twitter" aria-label="twitter" title="twitter" target="_blank"><i className="ui-twitter"></i></a>
									<a href="#" className="social social-facebook" aria-label="facebook" title="facebook" target="_blank"><i className="ui-facebook"></i></a>
									<a href="#" className="social social-youtube" aria-label="youtube" title="google plus" target="_blank"><i className="ui-youtube"></i></a>
									<a href="#" className="social social-instagram" aria-label="instagram" title="instagram" target="_blank"><i className="ui-instagram"></i></a>
								</div>
							</div>
						</nav> 

						<div className="nav__phone nav--align-right d-none d-lg-block">
							<span className="nav__phone-text">Call us:</span>
							<a href="tel:1-800-995-3959" className="nav__phone-number">1-800-995-3959</a>
						</div>

						<div className="nav__socials d-none d-lg-block">
							<div className="socials">
								<a href="#" className="social social-twitter" aria-label="twitter" title="twitter" target="_blank"><i className="ui-twitter"></i></a>
								<a href="#" className="social social-facebook" aria-label="facebook" title="facebook" target="_blank"><i className="ui-facebook"></i></a>
								<a href="#" className="social social-youtube" aria-label="youtube" title="google plus" target="_blank"><i className="ui-youtube"></i></a>
								<a href="#" className="social social-instagram" aria-label="instagram" title="instagram" target="_blank"><i className="ui-instagram"></i></a>
							</div>
						</div>

					</div> 
				</div>

			</div>
		</header> 

      </div>
  )
}

export default Navbar