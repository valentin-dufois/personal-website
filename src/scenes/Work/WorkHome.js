import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';

import neoTrafficImage1 from '../../assets/works/neo-traffic/neo.markets.png';
import neoTrafficImage3 from '../../assets/works/neo-traffic/neo.news.shd.png';
import neoTrafficImage2 from '../../assets/works/neo-traffic/neo.weather.fcl.png';

import prisme1  from '../../assets/works/prisme/dialog.3.JPG';
import prisme2  from '../../assets/works/prisme/embryo.1.jpg';
import prisme3  from '../../assets/works/prisme/servo.2.JPG';
import tdImage3 from '../../assets/works/td-library/holly.mess.png';
import tdImage2 from '../../assets/works/td-library/set.op.color.png';

import tdImage1 from '../../assets/works/td-library/tap.tempo.thumb.png';

const WorkHome = () => {
  const { t } = useTranslation();

  return (
    <main className="work">
      <h1>{ 'new std::thread([&] () {' }</h1>
      <h2>{ t('work.excerpts.connect-title') }</h2>
      <p>
        { t('work.excerpts.connect-desc') }
        <Link className="open-arrow" to="neo-connect">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        {/*<img src={ tdImage1 }/>*/}
        {/*<img src={ tdImage3 }/>*/}
        {/*<img src={ tdImage2 }/>*/}
      </div>
      <h2>{ t('work.excerpts.runner-title') }</h2>
      <p>
        { t('work.excerpts.runner-desc') }
        <Link className="open-arrow" to="runner">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        {/*<img src={ tdImage1 }/>*/}
        {/*<img src={ tdImage3 }/>*/}
        {/*<img src={ tdImage2 }/>*/}
      </div>
      <h2>{ t('work.excerpts.prisme-title') }</h2>
      <p>
        { t('work.excerpts.prisme-desc') }
        <Link className="open-arrow" to="prisme">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        <img src={ prisme1 } className="bordered"/>
        <img src={ prisme2 }/>
        <img src={ prisme3 }/>
      </div>
      <h2>{ t('work.excerpts.td-library-title') }</h2>
      <p>
        { t('work.excerpts.td-library-desc') }
        <Link className="open-arrow" to="td-library">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        <img src={ tdImage1 }/>
        <img src={ tdImage3 }/>
        <img src={ tdImage2 }/>
      </div>
      <h2>{ t('work.excerpts.neo-title') }</h2>
      <p>
        { t('work.excerpts.neo-desc') }
        <Link className="open-arrow" to="neo-traffic">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        <img src={ neoTrafficImage1 } className="bordered"/>
        <img src={ neoTrafficImage2 }/>
        <img src={ neoTrafficImage3 }/>
      </div>
    </main>
  );
};

export default WorkHome;
