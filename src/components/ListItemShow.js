import React from 'react'
import { Anchor } from 'grommet'

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
        <Anchor href={url.val}>
          {formatted_start} @ {summary}
        </Anchor>
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
