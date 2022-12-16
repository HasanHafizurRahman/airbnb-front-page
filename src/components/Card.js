// import katie from "../images/katie-zaferes.png";
// import bike from "../images/mountain-bike.png";
// import wedding from "../images/wedding-photography.png";
// import rating from "../images/star.png";
import styles from "../styles/Cards.module.css";

const Card = (props) => {
  return (
    <div>
      <section>
        <img className={styles.image} src={props.img} alt="katie" />
        <div className={styles.rating}>
          <img src={props.rating} alt="start icon" />
          <span>{props.span1}</span>
          <span className={styles.span}>{props.span2}</span>
          <span className={styles.span}>{props.span3}</span>
        </div>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
      </section>
    </div>
  );
};

export default Card;
