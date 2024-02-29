import './App.css';
import { useState } from 'react';
import ButtonTheme from './components/ButtonTheme/ButtonTheme';
import ButtonRounded from './components/ButtonRounded/ButtonRounded';
import SquaredCard from './components/SquaredCard/SquaredCard';

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
          <ButtonTheme icon={selectedTheme} setIcon={setSelectedTheme} />
        </div>
     </header>
     <main className='middleContainer'>
        <div className='leftMiddleContainer'>
            <div onClick={() => {
                changeMenu(1)
            }} className={`nonSelectedMenuButton ${selectedMenu === 1 ? "selectedButton" : ""}`}>
              Edit profile
            </div>
            <div onClick={() => {
               changeMenu(2)
            }} className={`nonSelectedMenuButton ${selectedMenu === 2 ? "selectedButton" : ""}`}>
              Account
            </div>
            <div onClick={() => {
               changeMenu(3)
            }} className={`nonSelectedMenuButton ${selectedMenu === 3 ? "selectedButton" : ""}`}>
              Profile Insight
            </div>
            <div onClick={() => {
               changeMenu(4)
            }} className={`nonSelectedMenuButton ${selectedMenu === 4 ? "selectedButton" : ""}`}>
              Change Password
            </div>
            <div onClick={() => {
               changeMenu(5)
            }} className={`nonSelectedMenuButton ${selectedMenu === 5 ? "selectedButton" : ""}`}>
             Notifications
            </div>
            <div onClick={() => {
                changeMenu(6)
            }} className={`nonSelectedMenuButton ${selectedMenu === 6 ? "selectedButton" : ""}`}>
             Privacy and Security
            </div>
            <div onClick={() => {
                changeMenu(7)
            }} className={`nonSelectedMenuButton ${selectedMenu === 7 ? "selectedButton" : ""}`}>
             Login Activity
            </div>
            <div onClick={() => {
                changeMenu(8)
            }} className={`nonSelectedMenuButton ${selectedMenu === 8 ? "selectedButton" : ""}`}>
             Help
            </div>
            <div onClick={() => {
                changeMenu(9)
            }} className={`nonSelectedMenuButton ${selectedMenu === 9 ? "selectedButton" : ""}`}>
             Logout
            </div>
        </div>
        <div className='rightMiddleContainer'>
            <div className='rowOfCards'>
              <SquaredCard />
              <SquaredCard />
              <SquaredCard />
              <SquaredCard />
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
            <div style={{display: "flex", columnGap: 10}}>
                <ButtonRounded text='Login' />
                <ButtonRounded text='Sign Up' />
            </div>
        </div>
     </main>
    </div>
  );
}

export default App;
