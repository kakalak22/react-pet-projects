import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return <article
    key={index}
    className={`color ${index >= 10 && "color-light"}`}
    style={{ backgroundColor: `#${hex}` }}
    onClick={() => { setAlert(true); navigator.clipboard.writeText("#" + hex) }}
  >
    <p className="color-value">{weight}%</p>
    <p className="color-value">#{hex}</p>
    {alert && <p className="alert">Copied to Clipboard</p>}
  </article>
}

export default SingleColor
