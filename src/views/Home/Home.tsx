import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'hooks/useTranslation';
import { IHomeProps } from './Home.interface';
import styles from './Home.module.scss';

export const Home: FC<IHomeProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.Home}>
      <h1>{t('WELCOME_MESSAGE')}</h1>
      <a
        href='https://en.wikipedia.org/wiki/Death_of_Nika_Shakarami'
        target='_blank'
        rel='noreferrer'
      >
        <h2>{t('IN_MEMORY_OF_NIKA')}</h2>
      </a>
      <p>{t('NIKA_INTRO')}</p>
      <div className={styles.links}>
        <Link to='/about'>{t('ABOUT')}</Link>
        <a target='_blank' href='#'>
          {t('GITHUB')}
        </a>
      </div>
    </div>
  );
};
