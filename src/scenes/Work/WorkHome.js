import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link }           from 'react-router-dom';
import useScramble        from '../../library/useScramble';
import connect1           from '../../assets/works/connect/connect.broadcast.png';
import connect2           from '../../assets/works/connect/connect.inventory.png';
import connect3           from '../../assets/works/connect/connect.planner-1.png';

import neoTrafficImage1 from '../../assets/works/neo-traffic/neo.markets.png';
import neoTrafficImage3 from '../../assets/works/neo-traffic/neo.news.shd.png';
import neoTrafficImage2 from '../../assets/works/neo-traffic/neo.weather.fcl.png';

import prisme1  from '../../assets/works/prisme/dialog.3.JPG';
import prisme2  from '../../assets/works/prisme/embryo.1.jpg';
import prisme3  from '../../assets/works/prisme/servo.2.JPG';
import runner1  from '../../assets/works/runner/runner.noise.png';
import tdImage3 from '../../assets/works/td-library/holly.mess.png';
import tdImage2 from '../../assets/works/td-library/set.op.color.png';
import tdImage1 from '../../assets/works/td-library/tap.tempo.thumb.png';


const WorkHome = () => {
  const { t } = useTranslation();
  const heading = useScramble('new std::thread([&] () {');

  return (
    <main className="work">
      <h1>{ heading }</h1>

      {/* --- Recent work --- */}
      <h2>{ t('work.excerpts.connect-title') }</h2>
      <p>
        { t('work.excerpts.connect-desc') }
        <Link className="open-arrow" to="neo-connect">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        <img loading="lazy" src={ connect1 }/>
        <img loading="lazy" src={ connect2 }/>
        <img loading="lazy" src={ connect3 }/>
      </div>

      <h2>{ t('work.excerpts.dvin-title') }</h2>
      <p>
        { t('work.excerpts.dvin-desc') }
        <Link className="open-arrow" to="dvin">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>

      <h2>{ t('work.excerpts.autotrader-title') }</h2>
      <p>
        { t('work.excerpts.autotrader-desc') }
        <Link className="open-arrow" to="autotrader">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>

      <h2>{ t('work.excerpts.dealership-title') }</h2>
      <p className="wip">
        { t('work.excerpts.dealership-desc') }
      </p>

      {/* --- Earlier work --- */}
      <h3 className="section-divider">{ t('work.section-past') }</h3>

      <h2>{ t('work.excerpts.neo-title') }</h2>
      <p>
        { t('work.excerpts.neo-desc') }
        <Link className="open-arrow" to="neo-traffic">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        <img loading="lazy" src={ neoTrafficImage1 } className="bordered"/>
        <img loading="lazy" src={ neoTrafficImage2 }/>
        <img loading="lazy" src={ neoTrafficImage3 }/>
      </div>
      <h2>{ t('work.excerpts.prisme-title') }</h2>
      <p>
        { t('work.excerpts.prisme-desc') }
        <Link className="open-arrow" to="prisme">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        <img loading="lazy" src={ prisme1 } className="bordered"/>
        <img loading="lazy" src={ prisme2 }/>
        <img loading="lazy" src={ prisme3 }/>
      </div>
      <h2>{ t('work.excerpts.runner-title') }</h2>
      <p>
        { t('work.excerpts.runner-desc') }
        <Link className="open-arrow" to="runner">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        <img loading="lazy" src={ runner1 }/>
      </div>
      <h2>{ t('work.excerpts.td-library-title') }</h2>
      <p>
        { t('work.excerpts.td-library-desc') }
        <Link className="open-arrow" to="td-library">
          &#10233;<span>{ t('work.read-more') }</span>
        </Link>
      </p>
      <div className="thumbs-row">
        <img loading="lazy" src={ tdImage1 }/>
        <img loading="lazy" src={ tdImage3 }/>
        <img loading="lazy" src={ tdImage2 }/>
      </div>
    </main>
  );
};

export default WorkHome;
