import React, {Component} from 'react'
import { injectIntl }     from 'react-intl'
import { EN, FR }       from 'src/scenes/Work/Prisme';

class Prisme extends Component {
  render() {
    return this.props.intl.locale === 'fr'
           ? <FR intl={this.props.intl} />
           : <EN intl={this.props.intl} />
  }
}

export default injectIntl(Prisme);
