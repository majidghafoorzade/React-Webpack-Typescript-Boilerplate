import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'hooks/useTranslation';
import { IAboutProps } from './About.interface';
import styles from './About.module.scss';

export const About: FC<IAboutProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.About}>
      <h1>{t('ABOUT')}</h1>
      <h2>{t('OUR_LITTLE_HERO')}</h2>
      <p>{t('NIKA_DESCRIPTION')}</p>
      <div className={styles.links}>
        <a
          target='_blank'
          href='https://en.wikipedia.org/wiki/Death_of_Nika_Shakarami'
          rel='noreferrer'
        >
          {t('READ_MORE')}
        </a>
        <Link to='/'>{t('HOME')}</Link>
        <a target='_blank' href='#'>
          {t('GITHUB')}
        </a>
      </div>
    </div>
  );
};
