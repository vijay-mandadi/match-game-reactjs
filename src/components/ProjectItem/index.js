import './index.css'

const ProjectItem = props => {
  const {imageItem, thumbnailMatch} = props
  const {id, thumbnailUrl} = imageItem

  const matchItem = () => {
    thumbnailMatch(id)
  }

  return (
    <li>
      <button type="button" onClick={matchItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ProjectItem
