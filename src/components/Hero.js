import hero from "../images/photo-grid.png";
import styles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.gallery} src={hero} alt="hero" />
      <h1 className={styles.title}>Online Experiences</h1>
      <p className={styles.text}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
