import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
            <div className="center">
				<img
					src={require('../../assets/images/photo-of-me.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p className='indent'>
					Hi! I am 20 years old and a junior full stack web developer looking to build a more
					intuitive user experience on the web. I recently earned
					a certificate in full stack development from the
					UCLA Extended bootcamp, with newly developed
					skills in JavaScript, CSS, React.js, and responsive web
					design. I now have the fundemental skills of an innovative problem solver
					passionate about developing apps, with a focus on
					mobile-first design and development. With each project,
					my aim is to best engage my audience for an impactful
					user experience.
				</p>
			</div>
		</section>
	);
}

export default About;