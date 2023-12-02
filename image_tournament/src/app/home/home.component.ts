import { Component } from '@angular/core';
import { ImageService } from '../services/image-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  leftImage: String="";
  rightImage: String="";
  roundNumber:number =0;
  imagesPathList=[];
  imageArray: any;
  image_data!: String;
  image_media_type!: String;
  
  constructor(private imageService: ImageService){}
  ngOnInit(){
    this.loadImages();
  }
  loadImages(): void {
    this.imageService.getImages().subscribe(
      (response) => {
        this.imageArray = response.imageArray;
        this.image_data=this.imageArray[2].imageData;
        this.image_media_type=this.imageArray[2].imageType;
        console.log("media type: "+this.image_media_type);
        console.log("image data type: "+this.image_data);

        console.log('imageArray (JSON):', JSON.stringify(this.imageArray, null, 2));
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


