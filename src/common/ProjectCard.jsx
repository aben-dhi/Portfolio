import React from 'react'

function ProjectCard({src, link ,h3 ,p}) {
  return (
	<a 
		href={link} target="_blank">
		<img className="hover" src={src} alt={`${h3} logo`} />
		<h3>{h3}</h3>
		<p>{p.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
	</a>
  )
}

export default ProjectCard
