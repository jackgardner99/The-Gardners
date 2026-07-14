import { useState } from 'react'

export default function SmartImage({ src, alt = '', className = '', placeholderClassName = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return <div className={placeholderClassName} aria-hidden="true" />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
