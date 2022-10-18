import { FC } from 'react';
import { ITemplateNameProps } from './TemplateName.interface';
import styles from './TemplateName.module.scss';

export const TemplateName: FC<ITemplateNameProps> = ({ children }) => {
  return <div className={styles.TemplateName}>{children}</div>;
};
