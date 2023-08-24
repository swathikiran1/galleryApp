// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, onChangeThumbnail, isActive} = props

  const {id, thumbnailUrl, thumbnailAltText} = thumbnailList

  const thumbnailClsValue = isActive ? 'thumbnail-active' : 'thumbnail-inactive'

  const onClickThumbnail = () => {
    onChangeThumbnail(id)
  }

  return (
    <li className="thumbnail-item" onClick={onClickThumbnail}>
      <button
        type="button"
        className={thumbnailClsValue}
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
