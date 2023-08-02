import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';

import RunnerEn from './RunnerEN.mdx';
import RunnerFr from './RunnerFR.mdx';

const Runner = () => {
  const { i18n, t } = useTranslation();

  return (
    <main className="work neo-traffic">
      <h1>
        { t('work.neo-traffic.title') }
        <Link className="back-arrow" to="/what-i-do/">
          &#10232;<span>{ t('work.back') }</span>
        </Link>
      </h1>
      { i18n.language === 'fr' ? <RunnerFr/> : <RunnerEn/> }
    </main>
  );
};

export default Runner;
