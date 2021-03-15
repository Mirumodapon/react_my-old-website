import Icon from '../assets/images/Icon.jpg';
import '../assets/scss/home.scss';
function Home() {
	return (
		<main id="home">
			<div className="home__center">
				<div className="home__center--icon">
					<img src={Icon} alt="icon" />
				</div>
				<h1>Welcome To Mirumo's Website</h1>
			</div>
		</main>
	);
}

export default Home;
