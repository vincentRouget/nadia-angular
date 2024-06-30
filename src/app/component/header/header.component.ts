import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  scrollYPosition: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrollYPosition = window.scrollY;
    console.log(this.scrollYPosition);
    localStorage.setItem('scrollPosition', this.scrollYPosition.toString());
  }

  ngOnInit(): void {
    const storedPosition = localStorage.getItem('scrollPosition');
    let localPosition = storedPosition ? +storedPosition : 0;
    window.scrollTo(0, localPosition);
  }
}
