import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';
import PrismeEn           from './PrismeEn.mdx';
import PrismeFr           from './PrismeFr.mdx';

const Prisme = () => {
  const { i18n, t } = useTranslation();

  return (
    <main className="work neo-traffic">
      <h1>
        { t('work.prisme.title') }
        <Link className="back-arrow" to="/what-i-do/">
          &#10232;<span>{ t('work.back') }</span>
        </Link>
      </h1>
      { i18n.language === 'fr' ? <PrismeFr/> : <PrismeEn/> }
    </main>
  );
};

export default Prisme;
