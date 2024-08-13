import classes from './ButtonPrimary.module.css'

export default function ButtonPrimary({children, buttonStyle, ...props} ) {
  return <button className={`${classes.button} ${buttonStyle || ""}`} {...props}>{children}</button>;
}
