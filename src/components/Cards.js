import katie from "../images/katie-zaferes.png";
import bike from "../images/mountain-bike.png";
import wedding from "../images/wedding-photography.png";
import rating from "../images/star.png";
import styles from "../styles/Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.Cards}>
      <section>
        <img className={styles.image} src={katie} />
        <div className={styles.rating}>
          <img src={rating} />
          <p>5.0(6) USA</p>
        </div>
        <p>Life lessons from katie zaferes</p>
        <p>From $126/person</p>
      </section>
      <section>
        <img className={styles.image} src={bike} />
        <div className={styles.rating}>
          <img src={rating} />
          <p>5.0(6) USA</p>
        </div>
        <p>Life lessons from katie zaferes</p>
        <p>From $126/person</p>
      </section>
      <section>
        <img className={styles.image} src={wedding} />
        <div className={styles.rating}>
          <img src={rating} />
          <p>5.0(6) USA</p>
        </div>
        <p>Life lessons from katie zaferes</p>
        <p>From $126/person</p>
      </section>
    </div>
  );
};

export default Cards;
