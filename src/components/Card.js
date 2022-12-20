// import katie from "../images/katie-zaferes.png";
// import bike from "../images/mountain-bike.png";
// import wedding from "../images/wedding-photography.png";
// import rating from "../images/star.png";
import styles from "../styles/Cards.module.css";

const Card = ({
  img,
  review,
  reviewNum,
  location,
  rating,
  title,
  description,
  openspot,
}) => {
  return (
    <div>
      <section>
        <div className={styles.card_badge}>
          {openspot === 0 ? "Sold Out" : "online"}
        </div>
        <img className={styles.image} src={img} alt="katie" />
        <div className={styles.rating}>
          <img src={rating} alt="start icon" />
          <span>{review}</span>
          <span className={styles.span}>{reviewNum}</span>
          <span className={styles.span}>{location}</span>
        </div>
        <p>{title}</p>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default Card;
