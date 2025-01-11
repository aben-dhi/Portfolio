import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
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
	</div>
	<hr/>
	<div className={styles.skillList}>
		<SkillList src={checkMarkIcon} skill="Pandas" />
		<SkillList src={checkMarkIcon} skill="Numpy" />
		<SkillList src={checkMarkIcon} skill="Matplotlib" />
		<SkillList src={checkMarkIcon} skill="git" />
	</div>
  </section>
  );
}

export default Skills
