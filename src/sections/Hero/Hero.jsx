import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';

function Hero() {
	const {theme, toggleTheme} = useTheme();

	const themeIcon = theme === 'light' ? sun : moon;
	const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
	const githubIcon = theme === 'light' ? githubLight : githubDark;

  	return (
		<section id="hero" className={styles.container}>
			<div className={styles.colorModeContainer}>
				<img
					className={styles.hero}
					src={heroImg} 
					alt="Profile picture of Amira Ben Dhia"
				/>
				<img 
					className={styles.colorMode}
					src={themeIcon} 
					alt="Color mode icon"
					onClick={toggleTheme}
				/>
			</div>
			<div className={styles.info}>
				<h1>
					Amira
					<br/>
					Ben Dhia
				</h1>
				<h2>Junior Data Scientist</h2>
				<span>
					<a href="https://linkedin.com/in/amira-ben-dhia-4641a426a" target='_blank'>
						<img src={linkedinIcon} alt="LinkedIn icon"/>
					</a>
					<a href="https://github.com/aben-dhi" target='_blank'>
						<img src={githubIcon} alt="Github icon"/>
					</a>
				</span>
				<p className={styles.description}>
					I'm passionate about data analysis, machine learning, and data visualization.
					I'm always eager to learn new things and I'm looking for opportunities to grow in the field of Data Science.
				</p>
				<a href={CV} download>
					<button className="hover">
						Resume
					</button>
				</a>
			</div>
		</section>
  );
}

export default Hero;