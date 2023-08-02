import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';

import TDLibraryEN from './TDLibraryEN.mdx';
import TDLibraryFR from './TDLibraryFR.mdx';

const TDLibrary = () => {
  const { i18n, t } = useTranslation();

  return (
    <main className="work neo-traffic">
      <h1>
        { t('work.td-library.title') }
        <Link className="back-arrow" to="/what-i-do/">
          &#10232;<span>{ t('work.back') }</span>
        </Link>
      </h1>
      { i18n.language === 'fr' ? <TDLibraryFR/> : <TDLibraryEN/> }
    </main>
  );
};

export default TDLibrary;
