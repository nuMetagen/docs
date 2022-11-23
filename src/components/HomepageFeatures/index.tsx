import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Markerless AR',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    Image: require('@site/static/img/1.jpg').default,
    description: (
      <>
        Elevate your brand with AR Ads experience targeting the audience of the biggest Telecom operator in Indonesia.
      </>
    ),
  },
  {
    title: 'Marker-based AR',
    Image: require('@site/static/img/2.jpg').default,
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Power up your Android app with our metaSDK that can be quickly integrated to perform certain AR-powered functions.
      </>
    ),
  },
  {
    title: 'Marker-based AR',
    Image: require('@site/static/img/3.jpg').default,
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We offer all in one service including the AR Contents & AR for Social Media Production. Consult with us freely.
      </>
    ),
  }
];

function Feature({ title, Image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className="image-container">
          <img src={Image} alt="logo" />
        </div>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" text-align="center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
