
import babor1image from '../Assets/babor1.jpg';
import classes from './Babor1.module.css';

const DrBabor1 = () => {
    return(
        <>
        <h1 className={classes.babor1h1}>Dr Babor Kezelés</h1>
        <div className={classes.babor1}>
          <img src={babor1image} alt='babor1image'></img>
        </div>
        <div className={classes.babor1p}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </>
    )
};

export default DrBabor1;