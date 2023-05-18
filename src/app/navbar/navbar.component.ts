import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  ngOnInit(){
    const profile = document.querySelector('nav .profile');
    const imgProfile = profile?.querySelector('img');
    const dropdownProfile = document.querySelector('.profile-link');
    window.addEventListener('click', function(e){
      if(e.target !== imgProfile){
        if(e.target !== dropdownProfile){
          if(dropdownProfile?.classList.contains('show')){
            dropdownProfile.classList.remove('show');
          }
        }
      }
    const allMenu = document.querySelectorAll('.content-data .head .menu');
    allMenu.forEach(item => {
      const icon = item.querySelector('.icon');
      const menuLink = item.querySelector('.menu-link');
      if(e.target != icon){
        if(e.target != menuLink){
          if(menuLink?.classList.contains('show')){
            menuLink.classList.remove('show');
          }
        }
      }
    });
    });
  }
  onProfileImgClick(){
    const profile = document.querySelector('nav .profile');
    if(profile != null) {
      const dropDownProfile = profile.querySelector('.profile-link');
      dropDownProfile?.classList.toggle('show');
    }    
  }
  onSideBarToggle(){
    const sidebar = document.getElementById('sidebar');
    const allSideDivider = document.querySelectorAll('#sidebar .divider');
    const content = document.getElementById('content');

    sidebar?.classList.toggle('hide');
    if(sidebar?.classList.contains('hide')){
      allSideDivider.forEach(item => {
        item.textContent ='-';
        if(content != undefined && content.style){
          content.style.width = "calc(100% - 60px)";
          content.style.left = "60px";
        }
        
      });
    }else{
      allSideDivider.forEach(item => {
        item.textContent = item.getAttribute('data-text');
        if(content != undefined && content.style){
          content.style.width = "calc(100% - 260px)";
          content.style.left = "260px";
        }
      });
    }
  }
}
