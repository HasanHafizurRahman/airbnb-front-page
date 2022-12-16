// import katie from "../images/katie-zaferes.png";
// import bike from "../images/mountain-bike.png";
// import wedding from "../images/wedding-photography.png";
// import rating from "../images/star.png";
import styles from "../styles/Cards.module.css";

const Card = ({ img, span1, span2, span3, rating, p1, p2 }) => {
  return (
    <div>
      <section>
        <img className={styles.image} src={img} alt="katie" />
        <div className={styles.rating}>
          <img src={rating} alt="start icon" />
          <span>{span1}</span>
          <span className={styles.span}>{span2}</span>
          <span className={styles.span}>{span3}</span>
        </div>
        <p>{p1}</p>
        <p>{p2}</p>
      </section>
    </div>
  );
};

export default Card;
