import React, {Component} from 'react'
import { injectIntl }     from 'react-intl'
import { PrismeEn }       from './PrismeEn';
import { PrismeFr }       from './PrismeFr';

class Index extends Component {
  render() {
    return this.props.intl.locale === 'fr'
           ? <PrismeFr intl={this.props.intl} />
           : <PrismeEn intl={this.props.intl} />
  }
}

export default injectIntl(Index);
