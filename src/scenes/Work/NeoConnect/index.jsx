import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';

import NeoConnectEn from './NeoConnectFR.mdx';

const NeoConnect = () => {
  const { i18n, t } = useTranslation();

  return (
    <main className="work neo-traffic">
      <h1>
        { t('work.neo-traffic.title') }
  <Link className="back-arrow" to="/what-i-do/">
    &#10232;<span>{ t('work.back') }</span>
  </Link>
  </h1>
  { i18n.language === 'fr' ? <NeoConnectEn/> : <NeoConnectEn/> }
  </main>
);
};

export default NeoConnect;
