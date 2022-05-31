import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className,type,title}) => {
    return (
      <div>
            <button className={className} type={type} >{title}</button>
      </div>
  )
}
Button.defaultProps = {
    type :'submit'
}

Button.propTypes = {
    className :PropTypes.isRequired
}

export default Button