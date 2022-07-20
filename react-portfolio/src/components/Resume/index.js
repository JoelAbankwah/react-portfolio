import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<a className="card" href={require("../../assets/files/developer-resume.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			<div className="flex-row">
			  <div>
				<h4>Front-End Proficiencies</h4>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>version control/Git</li> 
					<li>responsive design</li>
				</ol>
			  </div>
			  <div>
				<h4>Back-End Proficiencies</h4>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
			  </div>
			  <div>
				<h4>Dev Tool Proficiencies</h4>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
			  </div>
			  <div>
				<h4>Database Proficiencies</h4>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>SQLite</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			  </div>
			</div>
		</section>
	);
}

export default Resume;