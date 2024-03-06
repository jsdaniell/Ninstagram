import logo from './logo.svg';
import './App.css';
import ButtonTheme from './components/ButtonTheme';
import { useState } from 'react';
import ButtonMenu from './components/ButtonMenu';

function App() {
   const [selectedTheme, setSelectedTheme] = useState("sun")

   const [selectedMenu, setSelectedMenu] = useState(1)


   function changeMenu(number){
      setSelectedMenu(number)
   }

  return (
    <div className={`mainContainer ${selectedTheme}`}>
     <header className='headerMenu'>
        <div className='headerLeft'>
            <img className='logoLeft' alt="logo" src='https://www.virtualstacks.com/wp-content/uploads/2019/11/instagram-logo-name.png' />
        </div>
        <div className='headerRight'>
          <i class="fas fa-tv"></i>
          <i class="far fa-paper-plane"></i>
          <i class="far fa-plus-square"></i>
          <i class="fas fa-film"></i>
          <i class="far fa-heart"></i>
          <ButtonTheme setIcon={setSelectedTheme} icon={selectedTheme} />
        </div>
     </header>
     <main className='middleContainer'>
        <div className='leftMiddleContainer'>
            <ButtonMenu 
              changeMenu={changeMenu} 
              text='Edit Profile' 
              selectedMenu={selectedMenu} 
              indexMenu={1} 
            />
            <ButtonMenu 
              changeMenu={changeMenu}  
              text='Account' 
              selectedMenu={selectedMenu} 
              indexMenu={2} 
            />
             <ButtonMenu 
              changeMenu={changeMenu}  
              text='Profile Insight' 
              selectedMenu={selectedMenu} 
              indexMenu={3} 
            />
             <ButtonMenu 
              changeMenu={changeMenu}  
              text='Change Password' 
              selectedMenu={selectedMenu} 
              indexMenu={4} 
            />
             <ButtonMenu 
              changeMenu={changeMenu}  
              text='Notifications' 
              selectedMenu={selectedMenu} 
              indexMenu={5} 
            />
             <ButtonMenu 
              changeMenu={changeMenu}  
              text='Privacy and Security' 
              selectedMenu={selectedMenu} 
              indexMenu={6} 
            />
             <ButtonMenu 
              changeMenu={changeMenu}  
              text='Login Activity' 
              selectedMenu={selectedMenu} 
              indexMenu={7} 
            />
             <ButtonMenu 
              changeMenu={changeMenu}  
              text='Help' 
              selectedMenu={selectedMenu} 
              indexMenu={8} 
            />
             <ButtonMenu 
              changeMenu={changeMenu}  
              text='Logout' 
              selectedMenu={selectedMenu} 
              indexMenu={9}
              logoutButton
            />
        </div>
        <div className='rightMiddleContainer'>
            <div className='rowOfCards'>
              <div className='card'>
                <div className='titleCard'>
                  Total <br /> Followers
                </div>
                <div className='textMiddleCard'>
                  100
                </div>
                <div className='viewDetailsCard'>
                  View Details
                </div>
              </div>
              <div className='card'>
                <div className='titleCard'>
                  Total <br /> Followers
                </div>
                <div className='textMiddleCard'>
                  100
                </div>
                <div className='viewDetailsCard'>
                  View Details
                </div>
              </div>
              <div className='card'>
                <div className='titleCard'>
                  Total <br /> Followers
                </div>
                <div className='textMiddleCard'>
                  100
                </div>
                <div className='viewDetailsCard'>
                  View Details
                </div>
              </div>
              <div className='card'>
                <div className='titleCard'>
                  Total <br /> Followers
                </div>
                <div className='textMiddleCard'>
                  100
                </div>
                <div className='viewDetailsCard'>
                  View Details
                </div>
              </div>
            </div>
            <div className='title'>
              Recent Posts
            </div>
            <div className='rowOfCards'>
              <div className='divImage'>
                 <img alt='img' className='imageCard' src='https://source.unsplash.com/random/800x600?sig=1'></img>
                 <div className='rowAction'>
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                 </div>
              </div>
              <div className='divImage'>
              <img alt='img' className='imageCard' src='https://source.unsplash.com/random/800x600?sig=2'></img>
              <div className='rowAction'>
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                 </div>
                </div>
              <div className='divImage'>
                <img alt='img' className='imageCard' src='https://source.unsplash.com/random/800x600?sig=3'></img>
                <div className='rowAction'>
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                 </div>
              </div>
              <div className='divImage'>
                <img alt='img' className='imageCard' src='https://source.unsplash.com/random/800x600?sig=4'></img>
                <div className='rowAction'>
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                 </div>
              </div>
              <div className='divImage'>
                <img alt='img' className='imageCard' src='https://source.unsplash.com/random/800x600?sig=5'></img>
                <div className='rowAction'>
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                 </div>
              </div>
            </div>
        </div>
     </main>
    </div>
  );
}

export default App;
