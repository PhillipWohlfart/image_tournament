import { Component } from '@angular/core';
import { ImageService } from '../services/image-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  roundNumber:number =0;
  imagesPathList=[];
  imageArray: any;
  
  constructor(private imageService: ImageService){}
  ngOnInit(){
    this.loadImages();
  }
  loadImages(): void {
    this.imageService.getImages().subscribe(
      (response) => {
        this.imageArray = response.imageArray;
        console.log(this.imageArray);
      },
      (error) => {
        console.error('Error loading images:', error);
      }
    );
  }

  getImageText(imageName: string): void {
    this.imageService.getImageText(imageName).subscribe(
      (response) => {
        const imageData = response.imageData;
        console.log('Image Data:', imageData);
        // Use the imageData as needed
      },
      (error) => {
        console.error('Error getting image text:', error);
      }
    );
  }
  animateAndRedirect(element: any) {
    element.style.animation = 'highlightAndEnlarge 1s ease-in-out';
    setTimeout(() => {
      window.location.href = element.getAttribute('href');
    }, 1000);
  }
  //TODO: 
  randomizeImages() {
    
  }
}


