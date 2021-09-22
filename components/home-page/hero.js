import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/milos.jpg'
          alt='milos image'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Miloš</h1>
      <p>This is my blog about web development.</p>
    </section>
  );
};

export default Hero;
