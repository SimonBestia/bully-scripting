import clsx from 'clsx';
import React from 'react';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BullyLogoImageUrl from '@site/static/img/bully-logo.png'; // eslint-disable-line
import Layout from '@theme/Layout';

import styles from './index.module.css';

import type { DocusaurusConfig } from '@docusaurus/types';

type CustomFields = DocusaurusConfig['customFields'] & {
  meta?: { description?: string };
};

function HomepageHeader(): React.JSX.Element {
  let { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroText}>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className='button button--secondary button--lg' to='/docs'>
              Start Learning Scripting
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src={BullyLogoImageUrl}
            alt='Bully Logo'
            className={styles.heroLogo}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  let { siteConfig } = useDocusaurusContext();
  let description = (siteConfig.customFields as CustomFields)?.meta
    ?.description;
  if (!description) description = siteConfig.tagline;
  return (
    <Layout title='Homepage' description={description}>
      <HomepageHeader />
    </Layout>
  );
}
