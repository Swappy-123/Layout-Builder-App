// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-bg">
          {showLeftNavbar ? (
            <div className="left">
              <h1 className="head">Left Navbar Menu</h1>
              <ul className="list">
                <li className="text">Item 1</li>
                <li className="text">Item 2</li>
                <li className="text">Item 3</li>
                <li className="text">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="middle">
              <h1 className="head">Content</h1>
              <p className="text">Lorem ipsum dolor</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left">
              <h1 className="head">Right Navbar</h1>
              <div className="con">
                <p className="text">Ad 1</p>
              </div>
              <div className="con">
                <p className="text">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
