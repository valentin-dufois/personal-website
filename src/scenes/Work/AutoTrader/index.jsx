import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';

import AutoTraderEN from './AutoTraderEN.mdx';
import AutoTraderFR from './AutoTraderFR.mdx';

const AutoTrader = () => {
  const { i18n, t } = useTranslation();

  return (
    <main className="work">
      <h1>
        { t('work.autotrader.title') }
        <Link className="back-arrow" to="/what-i-do/">
          &#10232;<span>{ t('work.back') }</span>
        </Link>
      </h1>
      { i18n.language === 'fr' ? <AutoTraderFR/> : <AutoTraderEN/> }
    </main>
  );
};

export default AutoTrader;
