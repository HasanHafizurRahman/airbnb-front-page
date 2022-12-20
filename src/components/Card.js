// import katie from "../images/katie-zaferes.png";
// import bike from "../images/mountain-bike.png";
// import wedding from "../images/wedding-photography.png";
// import rating from "../images/star.png";
import styles from "../styles/Cards.module.css";

const Card = ({ card }) => {
  return (
    <div>
      <section>
        <div className={styles.card_badge}>
          {card.openspot === 0 ? "Sold Out" : "online"}
        </div>
        <img className={styles.image} src={card.img} alt="katie" />
        <div className={styles.rating}>
          <img src={card.rating} alt="start icon" />
          <span>{card.review}</span>
          <span className={styles.span}>{card.reviewNum}</span>
          <span className={styles.span}>{card.location}</span>
        </div>
        <p>{card.title}</p>
        <p>{card.description}</p>
      </section>
    </div>
  );
};

export default Card;
