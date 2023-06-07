import React from 'react'
import './App.scss';
import {useState, useEffect} from 'react'
import {ReactComponent as IconSvg} from './Assets/zag-icon.svg';
import {ReactComponent as ArrowSvg} from './Assets/reports-arrow.svg';
import {ReactComponent as SettingsSvg} from './Assets/settings.svg';
import {ReactComponent as GridSvg} from './Assets/Grid.svg';
import TableInit from './components/TableInit';

function App() {

  const [activeTab, setActiveTab] = useState('2');

  // const handleActiveTab = (id) => {

  //   if (activeTab != id) {
  //     setActiveTab(id);
  //   }
  // }

  const handleButtonClick = (buttonId) => () => {
    if (activeTab !== buttonId) {
      setActiveTab(buttonId);
    }
  };

  return (
    <div className="App">
   
      <div className='left'>
        <div className='main-icon'> 
          <IconSvg/>
        </div>

        <div className='menu-options'> 
          <div className={`menu reports-container ${activeTab == '1' ? 'active' : ''}`} onClick={handleButtonClick('1')}>
            <ArrowSvg className='icon'/>
            <span className='text'>Reports</span>
          </div>

          <div className={`menu workspaces-container  ${activeTab == '2' ? 'active' : ''}`} onClick={handleButtonClick('2')}>
            <GridSvg className='icon'/>
            <span className='text'>Workspaces</span>
          </div>

          <div className={`menu settings-container  ${activeTab == '3' ? 'active' : ''}`} onClick={handleButtonClick('3')}>
            <SettingsSvg className='icon'/>
            <span className='text'>Settings</span>
          </div>
        </div>
      </div>

      <div className='right'>
        <div className='order-header'>
          <h3>Orders</h3>
          <button className='add-order-btn'><span>+</span> Add Order</button>
        </div>

        <div className='hr-line'/>

        <div className='confirmed-tab'>
        
         <div className='test'>

            <div className='heading'>
              <h3>Confirmed</h3>
              <p>258</p>
            </div>
            <button className='minus-btn'><div className='minus'/></button>
          
          </div>

         <div className='hr-line'></div>

         <TableInit/>

        
        </div>
        
        
        
        
        <div className='issues-tab'>
            <div className='heading'>
             <h3>Issues</h3>
              <p>21</p>
            </div>
             <button className='plus-btn'>+</button>

        </div>
      </div>
    </div>
  );
}

export default App;
