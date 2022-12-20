// import katie from "../images/katie-zaferes.png";
// import bike from "../images/mountain-bike.png";
// import wedding from "../images/wedding-photography.png";
// import rating from "../images/star.png";
import styles from "../styles/Cards.module.css";
import Card from "./Card";

const Cards = () => {
  const cards = [
    {
      img: "../../images/katie-zaferes.png",
      rating: "../../images/star.png",
      review: "6.5",
      reviewNum: "(5)",
      location: "USA",
      title: "Life lessons from katie zaferes",
      description: "From $126/person",
      openspot: 0,
    },
    {
      img: "../../images/mountain-bike.png",
      rating: "../../images/star.png",
      review: "6.5",
      reviewNum: "(5)",
      location: "USA",
      title: "Group mountainer biking",
      description: "From $126/person",
      openspot: 0,
    },
    {
      img: "../../images/wedding-photography.png",
      rating: "../../images/star.png",
      review: "6.5",
      reviewNum: "(5)",
      location: "USA",
      title: "Learn wedding photography",
      description: "From $126/person",
      openspot: 4,
    },
  ];
  return (
    <div className={styles.Cards}>
      {cards.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
};

export default Cards;
