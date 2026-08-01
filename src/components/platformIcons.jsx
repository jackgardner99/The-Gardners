const ICONS = {
  spotify: [
    {
      d: 'M12 2a10 10 0 100 20 10 10 0 000-20zm4.4 14.4a.6.6 0 01-.83.2c-2.27-1.39-5.13-1.7-8.5-.93a.6.6 0 11-.27-1.17c3.68-.84 6.83-.48 9.4 1.08a.6.6 0 01.2.82zm1.2-2.7a.75.75 0 01-1.03.25c-2.6-1.6-6.56-2.06-9.63-1.13a.75.75 0 11-.43-1.44c3.5-1.06 7.87-.54 10.85 1.29a.75.75 0 01.24 1.03zm.1-2.8C14.9 9.2 9.7 9 6.6 9.96a.9.9 0 11-.53-1.72c3.56-1.08 9.34-.86 13.02 1.34a.9.9 0 01-.92 1.55z',
    },
  ],
  // Two ascending eighth notes joined by a beam, matching the Apple Music mark.
  appleMusic: [
    { tag: 'path', d: 'M9.3 6.3L9.3 5 17.3 3 17.3 4.3Z' },
    { tag: 'rect', x: 9.3, y: 5, width: 1.3, height: 13 },
    { tag: 'rect', x: 17.3, y: 3, width: 1.3, height: 9 },
    { tag: 'ellipse', cx: 7.3, cy: 18.3, rx: 2.7, ry: 2.1, transform: 'rotate(-18 7.3 18.3)' },
    { tag: 'ellipse', cx: 15.3, cy: 12.3, rx: 2.7, ry: 2.1, transform: 'rotate(-18 15.3 12.3)' },
  ],
  youtubeMusic: [
    { d: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 1.6a8.4 8.4 0 110 16.8 8.4 8.4 0 010-16.8z' },
    { d: 'M10 7.5v9l7-4.5z' },
  ],
  bandcamp: [{ d: 'M4 4l16 8-16 8z' }],
  amazonMusic: [
    {
      d: 'M4 14.8c4.2 3 11.6 3 15.8 0',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round',
    },
    { d: 'M18.3 13.2l2.4.7-.6 2.5-2.4-1.4z' },
  ],
}

export default function PlatformIcon({ platform, className }) {
  const shapes = ICONS[platform]
  if (!shapes) return null

  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} aria-hidden="true">
      {shapes.map(({ tag = 'path', ...rest }, index) => {
        const Tag = tag
        return <Tag key={index} fill="currentColor" {...rest} />
      })}
    </svg>
  )
}
