
import React from 'react'
import './Popup.css'

const Confirm = ({ text, open, handleConfirm }) => {
    return (
      <>
        <div className={open ? 'confirm show' : 'confirm'}>
          <div className="confirm-content">
            <h4>CONFIRM</h4>
            <div>
              <h2>{text}</h2>
              <p>This action is final...</p>
            </div>
          </div>
          <div className="confirm-btns">
            <button onClick={() => handleConfirm(true)}>YES</button>
            <button onClick={() => handleConfirm(false)}>NO</button>
          </div>
        </div>
        <div 
          className="overlay" 
          onClick={() => handleConfirm(false)} 
        />
      </>
    )
  }

  
  const Popup1 = () => {
    const [open, setOpen] = React.useState(false)
  
    const handleConfirm = result => {
      if (result) {
        console.log('some action...')
      }
      
      setOpen(false)
    }
    
    return (
      <>      
        <button className="button" onClick={() => setOpen(true)}>
          OPEN
        </button>
        <Confirm 
          text={'Delete Account?'}
          open={open}
          handleConfirm={handleConfirm}
        />
      </>
    )
  }


  export default Popup1