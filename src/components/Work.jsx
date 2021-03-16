import { useEffect, useState } from 'react';
import WorkCard from './public/WorkCard';
import '../assets/scss/works.scss';
function Work() {
	const [works, setWorks] = useState([]);
	useEffect(() => {
		console.log(0);
		fetch('https://api.github.com/users/Mirumodapon/repos')
			.then((e) => e.json())
			.then((response) => {
				let _works = [];
				response.forEach((item) => {
					const {
						name,
						id,
						html_url,
						description,
						language,
						forks_count,
						open_issues,
						stargazers_count,
						homepage
					} = item;
					_works.push({
						name,
						id,
						html_url,
						description,
						language,
						forks_count,
						open_issues,
						stargazers_count,
						homepage
					});
				});
				setWorks(_works);
			});
		// eslint-disable-next-line
	}, []);
	return (
		<main id="works">
			<div className="works">
				{works.map((item) => (
					<WorkCard key={item.id} data={item}></WorkCard>
				))}
			</div>
		</main>
	);
}

export default Work;
