import Footer from '../footer/footer';
import styles from './Home.module.css';

function HomeFeature() {
  return (
    <div>
      <h2 className={styles.featureTitle}>What we provide</h2>
      <div className={styles.homeFeature}>
        <div className={styles.feature}>
          <div className={styles.featureName}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>lightning-bolt</title>
              <path d="M11 15H6L13 1V9H18L11 23V15Z" />
            </svg>
            <br />
            Fast
          </div>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptatum nostrum nobis enim nemo nihil cumque error maxime dolor
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureName}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>star-four-points</title>
              <path d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
            </svg>
            <br />
            Quality
          </div>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quas, nemo sapiente aspernatur quisquam autem? Repudiandae at sunt
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureName}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>pyramid</title>
              <path d="m 23.810848,17.936246 v 0 L 13.013735,0.56670603 C 12.787024,0.19834711 12.39028,0 11.993535,0 11.596791,0 11.228385,0.19834711 10.973336,0.56670603 L 0.17622265,17.936246 v 0 c -0.36840543,0.595041 -0.17003328,1.473436 0.59511645,1.756789 l 10.7971129,4.22196 C 11.710147,24 11.85184,24 11.993535,24 c 0.141696,0 0.311728,0 0.425083,-0.085 l 10.797114,-4.19363 c 0.793488,-0.311688 0.963521,-1.190083 0.595116,-1.785124" />
            </svg>
            <br />
            Stable
          </div>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut
            perspiciatis, minus, dicta laborum tempore dolor eos molestias quae
          </p>
        </div>
      </div>
    </div>
  );
}

function TrendingCategorires() {
  const categories = [
    'Shirt',
    'Shoes',
    'Headphone',
    'Watch',
    'Jacket',
    'Pants',
    'Coat',
    'Phone',
    'Laptop',
    'Pan',
    'Sofa',
    'Beb',
    'Belt',
    'Keyboard',
    'Mouse',
    'Pen',
    'Pencil',
    'Ruler',
    'Rubber',
    'Neckless',
    'Ring',
    'Air conditioner',
    'Brigde',
    'Washing machine',
    'Bowl',
    'Chopsticks',
    'Cookies',
    'Candy',
    'Chocolate',
    'Backpack',
    'Mug',
    'Towel',
    'Pillow',
    'Blanket',
    'Lamp',
    'Camera',
    'Speaker',
    'Table',
    'Lights',
  ];

  return (
    <div>
      <h2>Trending categories</h2>
      <div className={styles.trendingCategories}>
        {categories.map((categoryItem) => {
          return (
            <a
              href=""
              key={categoryItem}
              className={styles.categoryItem}
            >
              {categoryItem}
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <section className="content-wrapper">
      <div className={styles.home}>
        <div className={styles.homeText}>
          <h1 className={styles.homeTitle}>Our store</h1>
          <div className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            tempora quibusdam? Possimus in voluptate, eaque ullam, maiores saepe
            tenetur error molestias animi consequuntur assumenda a praesentium
            enim, sapiente facere iure. Your next favourite store{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>heart</title>
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          </div>
        </div>
        <div
          className="figure"
          style={{ color: 'white' }}
        >
          <img
            src="/images/home.jpg"
            alt="Restaurant"
          />
          <div className="figureCaption">
            Source:&nbsp;
            <a
              href="https://www.pexels.com/vi-vn/anh/thanh-tr-ng-d-y-den-260922/"
              target="_blank"
            >
              <u>Pexel</u>
            </a>
          </div>
        </div>
      </div>
      <HomeFeature />
      <TrendingCategorires />
      <Footer />
    </section>
  );
}
