
import classes from './Form.module.css';


export let number = 0

const Form = () => {
  const loginHandler = (event) => {
    number = event.target.value

    console.log(number)
  };

  

  return (
    <main className={classes.auth}>
      <section>
        <form >
          <div className={classes.control}>
            <label htmlFor='number'>Enter number</label>
            <input type='number' id='number' onChange={loginHandler}/>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Form;

