import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Artist presslist',
			description:
				'This project is a full-stack application for Artist Nation to comprise and manage a press list.',
			image: 'artist-presslist.png',
			technologies: [
				'JavaScript',
				'Node.js',
				'Express',
                'MYSQL & Sequalize',
				'Heroku',
			],
			github: 'https://github.com/sammylwolfson/artistnation-presslist',
			deployed: 'https://artistnation-presslist.herokuapp.com/',
		},
		{
			name: 'DEJA IMP',
			description:
				'Warehouse management software for enterprise transition from traditional ledger based inventory systems to team based digital inventory.',
			image: 'deja-imp.png',
			technologies: [
				'JavaScript',
				'GraphQl',
				'Express',
                'MongoDB',
                'Apollo',
				'Heroku',
			],
			github: 'https://github.com/edellenator/Deja-imp/',
			deployed: 'https://deja-imp.herokuapp.com',
		},
		{
			name: 'Cat Me',
			description:
				'Cat Me is an application that allows users to get fun photos and facts about cats.',
			image: 'cat-me.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Foundation', 'GoogleIcons'],
			github: 'https://github.com/sammylwolfson/cat-me',
			deployed: 'https://sammylwolfson.github.io/cat-me/',
		},
		{
			name: 'Tech Blog',
			description:
				'A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.',
			image: 'tech-blog.png',
			technologies: [
				'JavaScript',
				'MYSQL',
				'JawsDB',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/JoelAbankwah/tech-blog',
			deployed: 'https://agile-earth-64002.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/JoelAbankwah/weather-dashboard',
			deployed: 'https://JoelAbankwah.github.io/weather-dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/JoelAbankwah/password-generator',
			deployed: 'https://JoelAbankwah.github.io/password-generator/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li>
						<Project projects={projects[0]}></Project>
					</li>
					<li>
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li>
						<Project projects={projects[2]}></Project>
					</li>
					<li>
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li>
						<Project projects={projects[4]}></Project>
					</li>
					<li>
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;