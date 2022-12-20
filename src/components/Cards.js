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
      span1: "6.5",
      span2: "(5)",
      span3: "USA",
      p1: "Life lessons from katie zaferes",
      p2: "From $126/person",
    },
    {
      img: "../../images/mountain-bike.png",
      rating: "../../images/star.png",
      span1: "6.5",
      span2: "(5)",
      span3: "USA",
      p1: "Group mountainer biking",
      p2: "From $126/person",
    },
    {
      img: "../../images/wedding-photography.png",
      rating: "../../images/star.png",
      span1: "6.5",
      span2: "(5)",
      span3: "USA",
      p1: "Learn wedding photography",
      p2: "From $126/person",
    },
  ];
  return (
    <div className={styles.Cards}>
      {cards.map((card) => {
        return (
          <Card
            img={card.img}
            rating={card.rating}
            span1={card.span1}
            span2={card.span2}
            span3={card.span3}
            p1={card.p1}
            p2={card.p2}
          />
        );
      })}
      {/* <Card
        img={katie}
        rating={rating}
        span1={6.5}
        span2="(6)"
        span3="USA"
        p1="Life lessons from katie zaferes"
        p2="From $126/person"
      />
      <Card
        img={wedding}
        rating={rating}
        span1={5.5}
        span2="(8)"
        span3="USA"
        p1="Learn wedding photography"
        p2="From $156/person"
      />
      <Card
        img={bike}
        rating={rating}
        span1={4.5}
        span2="(6)"
        span3="USA"
        p1="Group mountainer biking"
        p2="From $169/person"
      /> */}
    </div>
  );
};

export default Cards;
