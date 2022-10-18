import { FC } from 'react';
import { ITemplateNameProps } from './TemplateName.interface';
import styles from './TemplateName.module.scss';

export const TemplateName: FC<ITemplateNameProps> = () => {
  return <div className={styles.TemplateName}>TemplateName Page</div>;
};
