import styles from './SkillsStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext.jsx';

function Skills() {
	const {theme, toggleTheme} = useTheme();
		const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;
  return(
  <section id="skills" className={styles.container} >
	<h1 className="sectionTitle">Skills</h1>
	<div className={styles.skillList}>
		<SkillList src={checkMarkIcon} skill="Python" />
		<SkillList src={checkMarkIcon} skill="R" />
		<SkillList src={checkMarkIcon} skill="JavaScript" />
		<SkillList src={checkMarkIcon} skill="HTML" />
		<SkillList src={checkMarkIcon} skill="CSS" />
	</div>
	<hr/>
	<div className={styles.skillList}>
		<SkillList src={checkMarkIcon} skill="SQL" />
		<SkillList src={checkMarkIcon} skill="Excel" />
		<SkillList src={checkMarkIcon} skill="Tableau" />
		<SkillList src={checkMarkIcon} skill="Power BI" />
		<SkillList src={checkMarkIcon} skill="React" />
	</div>
	<hr/>
	<div className={styles.skillList}>
		<SkillList src={checkMarkIcon} skill="Pandas" />
		<SkillList src={checkMarkIcon} skill="Numpy" />
		<SkillList src={checkMarkIcon} skill="Matplotlib" />
		<SkillList src={checkMarkIcon} skill="git" />
		<SkillList src={checkMarkIcon} skill="Git" />
	</div>
  </section>
  );
}

export default Skills
