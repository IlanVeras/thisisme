import Card from 'react-bootstrap/Card';
import styles from "../CardProjeto/style.module.css"
import ButtonClean from '../ButtonClean/ButtonClean';

export default function CardProjeto({title, subTitle, description, link, srcImage}) {
  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className={styles.imageContainer}>
            <img src={srcImage} className={styles.image}></img>
        </div>
        <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        <div className={styles.links}>
            <ButtonClean txt="Projeto" dark={true} className={styles.linkBtn}/>
            <ButtonClean txt="Repositório"/>
        </div>
      </Card.Body>
    </Card>
  );
}
