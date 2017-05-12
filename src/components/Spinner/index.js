import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const THEME_COLORS = {
  'blue': {
    'before': 'rgba(232, 241, 254, 1)',
    'after': 'rgba(59, 131, 192, 1)',
  },
  'default': {
    'before': 'rgba(0, 0, 0, .1)',
    'after': '#999999',
  },
  'green': {
    'before': 'rgba(0, 178, 0, .1)',
    'after': '#00B200',
  },
  'inverted': {
    'before': 'rgba(256, 256, 256, .25)',
    'after': 'rgba(153, 153, 153, 1)',
  },
}

const SIZES = {
  'default': {
    actual: '2.643rem',
    meta: '2.2585em',
  },
  'large': {
    actual: '5rem',
    meta: '4.5714em',
  },
  'mini': {
    actual: '1.714rem',
    meta: '1.2857em',
  },
  'small': {
    actual: '2.143rem',
    meta: '1.7142em',
  },
  'tiny': {
    actual: '1.143rem',
    meta: '0.857em',
  },
}



const loader = keyframes`
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
`

const Spinner = styled.span`
  display: ${props => props.inline ? 'inline-block' : 'block'};
  position: relative;
  margin: 0 auto;
  width: ${props => SIZES[props.size].actual};
  height: ${props => SIZES[props.size].actual};

  &:before,
  &:after {
    position: absolute;
    content: '';
    top: 12%;
    left: 62%;
    width: ${props => SIZES[props.size].meta};
    height: ${props => SIZES[props.size].meta};
    margin: 0 0 0 -50%;
  }

  &:before {
    border-color: ${props => THEME_COLORS[props.theme].before};
  }

  &:after {
    animation: ${loader} .6s linear;
    animation-iteration-count: infinite;
    border-color: ${props => THEME_COLORS[props.theme].after} transparent transparent;
    box-shadow: 0 0 0 1px transparent;
  }

  &:before,
  &:after {
    border-style: solid;
    border-width: ${props => props.size === 'tiny' ? '2px' : '3px'};
    border-radius: 500rem;
  }
`

Spinner.propTypes = {
  inline: PropTypes.bool,
  theme: PropTypes.oneOf([
    'blue',
    'default',
    'green',
    'inverted',
  ]),
  size: PropTypes.oneOf([
    'default',
    'large',
    'mini',
    'small',
    'tiny',
  ]),
}

Spinner.defaultProps = {
  size: 'default',
  theme: 'default',
}

export default Spinner
