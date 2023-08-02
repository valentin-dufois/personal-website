import React              from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink }  from 'react-router-dom';

const Header = () => {
  const { i18n, t } = useTranslation();

  const handleToggleLocale = React.useCallback(() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  }, []);

  return <>
    <header key="header">
      <Link to="/" className="title">val</Link>
      <div id="language-switcher">
        <a onClick={ handleToggleLocale } href="#">
          { t('header.switch-locale') }
        </a>
      </div>
    </header>
    <menu key="menu">
      <NavLink to="/">{ t('menu.who-am-i') }</NavLink>
      <NavLink to="/what-i-do">{ t('menu.what-i-do') }</NavLink>
    </menu>
  </>;
};

export default Header;
