import '../assets/scss/about.scss';
import Icon from '../assets/images/Icon.jpg';

function About() {
	return (
		<main id="about">
			<div className="about">
				<div className="about__left">
					<h2 className="about__left--name">林冠渝</h2>
					<ul className="about__left--info">
						<li>Kuan-Yu Lin</li>
						<li>UI/UX Learner</li>
						<li>Full Stack Developer</li>
						<li>NPTU Student, CS Major</li>
					</ul>
					<table className="about__left--contact">
						<tr>
							<td>Email</td>
							<td>: </td>
							<td>
								<a href="mailto:mail@mirumo.org">
									mail@mirumo.org
								</a>
							</td>
						</tr>
						<tr>
							<td>Telegram</td>
							<td>: </td>
							<td href="https://t.me/Mirumodapon">
								@Mirumodapon
							</td>
						</tr>
						<tr>
							<td>Instagram</td>
							<td>: </td>
							<td>
								<a href="https://www.instagram.com/mirumo_0915/">
									@mirumo_0915
								</a>
							</td>
						</tr>
					</table>
				</div>
				<div className="about__right">
					<img src={Icon} alt="icon" />
				</div>
			</div>
		</main>
	);
}

export default About;
