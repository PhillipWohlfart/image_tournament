import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  animateAndRedirect(element: any) {
    element.style.animation = 'highlightAndEnlarge 1s ease-in-out';
    setTimeout(() => {
      window.location.href = element.getAttribute('href');
    }, 1000);
  }
}
