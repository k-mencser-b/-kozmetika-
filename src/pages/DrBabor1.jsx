import classes from './DrBaborPro.module.css';
import babor1image from '../Assets/babor1.jpg';

const DrBabor1 = () => {
    return(
        <>
        <h1 className={classes.baborpro}>Dr Babor Kezelés</h1>
        <div className={classes.babor1}>
          <img src={babor1image} alt='babor1image'></img>
        </div>
        <p>Valamin szöveg</p>
        </>
    )
};

export default DrBabor1;