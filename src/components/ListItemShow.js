import React from 'react'

const ListItemShow = ({
  summary,
  start,
  end,
  description,
  url,
  formatted_start,
}) => (
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
)
export default ListItemShow
