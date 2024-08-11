type Show = {
  summary: string
  start: string
  end: string
  description: string
  url: {
    val: string
  }
  formatted_start: string
}

export function ListItemShow({
  summary,
  start,
  end,
  description,
  url,
  formatted_start,
}: Show) {
  return (
  <div className="list_item-show">
    <h3>
      {url && url.val ? (
        <a href={url.val}>
          {formatted_start} @ {summary}
        </a>
      ) : (
        <span>
          {formatted_start} @ {summary}
        </span>
      )}
    </h3>
    <p>{description}</p>
  </div>
)}
