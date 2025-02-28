export function YouTubeEmbed({ videoId, className = '' }) {
  return (
    <iframe
      className={className}
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
