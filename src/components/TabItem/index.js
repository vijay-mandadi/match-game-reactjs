import './index.css'

const TabItem = props => {
  const {tabItem, activeTabitem, isActive} = props
  const {tabId, displayText} = tabItem

  const clickTabitem = () => {
    activeTabitem(tabId)
  }

  const style = isActive ? 'button-active' : 'button-inactive'

  return (
    <li className="listitem">
      <button type="button" onClick={clickTabitem} className={style}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
