import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavbarService } from '../../services/navbar.service';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  imageToShow: any;
  isImageLoading: boolean = false;
  uploadedImage: any = File;
  dbImage: any;
  postResponse: any;
  successResponse: any = String;
  image: any;
  showEditServicesModal: boolean = false;
  public onImageUpload($event: any) {
    this.uploadedImage = $event.target.files[0];
  }
  @Input() Username: string = '';

  constructor( private navbar: NavbarService) {}

  ngOnInit(): void {
    this.getImageFromService();
  }
 

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
  
    this.displayStyle = 'none';
  
    
  }
  imageUploadAction() {
    if (this.uploadedImage == null) {
    } else {
      const imageFormData = new FormData();
      imageFormData.append(
        'avatar',
        this.uploadedImage,
        this.uploadedImage.name
      );
      this.navbar.upImage(imageFormData);
    }
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.navbar.getImage().subscribe(
      (data: any) => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }
    );
  }
}
