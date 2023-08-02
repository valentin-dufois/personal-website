import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';

import NeoTrafficEn from './NeoTrafficEN.mdx';
import NeoTrafficFr from './NeoTrafficFR.mdx';


const NeoTraffic = () => {
  const { i18n, t } = useTranslation();

  return (
    <main className="work neo-traffic">
      <h1>
        { t('work.neo-traffic.title') }
        <Link className="back-arrow" to="/what-i-do/">
          &#10232;<span>{ t('work.back') }</span>
        </Link>
      </h1>
      { i18n.language === 'fr' ? <NeoTrafficEn/> : <NeoTrafficFr/> }
    </main>
  );
};

export default NeoTraffic;
