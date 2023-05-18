import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  
  constructor() {
   
  
  }
  ngOnInit(){
    let allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
    allDropdown.forEach(item=> {
      const a = item.parentElement?.querySelector('a:first-child');
      a?.addEventListener('click', function(e) {
        e.preventDefault();

        if(!a.classList.contains('active')){
          allDropdown.forEach(i => {
            let aLink = i.parentElement?.querySelector('a:first-child');
            if(aLink != null) 
              aLink.classList.remove('active');
            i.classList.remove('show');
          })
        }

        a.classList.toggle('active');
        item.classList.toggle('show');

      });
    });
  }
  onSidebarMouseLeave() {
    let allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
    const allSideDivider = document.querySelectorAll('#sidebar .divider');
    allDropdown.forEach(item=> {
      const a = item.parentElement?.querySelector('a:first-child');
      a?.classList.remove('active');
      item.classList.remove('show');
    });
    allSideDivider.forEach(items => {
      items.textContent = '-';
    })
  }
  onSideBarMouseEnter(){
    let allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
    const allSideDivider = document.querySelectorAll('#sidebar .divider');
    allDropdown.forEach(item=> {
      const a = item.parentElement?.querySelector('a:first-child');
      a?.classList.remove('active');
      item.classList.remove('show');
    });
    allSideDivider.forEach(item => {
      item.textContent = item.getAttribute('data-text');
    })
   
  }
}
