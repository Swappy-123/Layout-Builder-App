// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onShowContent = () => {
        onToggleShowContent()
      }

      const onShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="bg">
          <h1 className="head">Layout</h1>
          <input
            type="checkbox"
            id="content"
            onChange={onShowContent}
            checked={showContent}
          />
          <label className="para" htmlFor="content">
            Content
          </label>
          <input
            type="checkbox"
            id="LeftNavbar"
            onChange={onShowLeftNavbar}
            checked={showLeftNavbar}
          />
          <label className="para" htmlFor="LeftNavbar">
            Left Navbar
          </label>
          <input
            type="checkbox"
            id="RightNavbar"
            onChange={onShowRightNavbar}
            checked={showRightNavbar}
          />
          <label className="para" htmlFor="RightNavbar">
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
