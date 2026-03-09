import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';

import DVinEN from './DVinEN.mdx';
import DVinFR from './DVinFR.mdx';

const DVin = () => {
  const { i18n, t } = useTranslation();

  return (
    <main className="work">
      <h1>
        { t('work.dvin.title') }
        <Link className="back-arrow" to="/what-i-do/">
          &#10232;<span>{ t('work.back') }</span>
        </Link>
      </h1>
      { i18n.language === 'fr' ? <DVinFR/> : <DVinEN/> }
    </main>
  );
};

export default DVin;
