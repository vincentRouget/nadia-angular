import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

  scrollYPosition: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrollYPosition = window.scrollY;
    console.log(this.scrollYPosition);
    localStorage.setItem('scrollPosition', this.scrollYPosition.toString());
  };

  ngOnInit(): void {
    const storedPosition = localStorage.getItem('scrollPosition');
    let localPosition = storedPosition ? +storedPosition : 0;
    window.scrollTo(0, localPosition);
    // ngOnInit is a good place to get initial values
  };

  ngAfterViewInit(): void {
    // ngAfterViewInit ensures that the view is fully rendered before setting the scroll position
    const storedPosition = localStorage.getItem('scrollPosition');
    let localPosition = storedPosition ? +storedPosition : 0;
    window.scrollTo(0, localPosition);
  };
}