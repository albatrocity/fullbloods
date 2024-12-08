import { css } from '@styled-system/css'

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
      <span className={css({ textStyle: 'h5' })}>
        {url && url.val ? (
          <a href={url.val}>
            {formatted_start} @ {summary}
          </a>
        ) : (
          <span>
            {formatted_start} @ {summary}
          </span>
        )}
      </span>
      <p>{description}</p>
    </div>
  )
}
