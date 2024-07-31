
import classes from './PopUp.module.css'

export default function PopUp({message, isSelected}) {

  return (
    <div className={classes.container}>
        {isSelected && <p className={`${classes.message} ${classes.success}`}>Successfully select {message}</p>}
        {!isSelected && <p className={`${classes.message} ${classes.remove}`}>Successfully remove {message}</p>}
    </div>
  );
}
