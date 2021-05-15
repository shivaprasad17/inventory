import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss'],
})
export class AdditemComponent implements OnInit {
  itemImage='/assets/item.jpeg'

  constructor(public modalController:ModalController,private camera: Camera,private actionSheetController:ActionSheetController) { }

  ngOnInit() {}
  closeModal(){
    this.modalController.dismiss()
  }
  async takeSnap() {
    this.itemImage=''
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
  public pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 900,
      targetHeight: 600,
      allowEdit: true,
      saveToPhotoAlbum: false,
      cameraDirection: 1,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.itemImage= "data:image/jpg;base64," + imageData;
      // this.base64Conversion = 'data:image/jpeg;base64,' + imageData;
      // this.displayImage = "data:image/jpg;base64," + imageData;
      // this.mobiApiService.preferenceAvatarImg = this.displayImage;
      // this.imageflag=true
      // console.log(this.mobiApiService.preferenceAvatarImg)
      // let cameraImageSelector = document.getElementById('camera-image');
      // cameraImageSelector.setAttribute('src', this.displayImage);
      // this.preferenceForm.markAsDirty();
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
  setDefaultPic() {
    let cameraImageSelector = document.getElementById('camera-image');
    cameraImageSelector.setAttribute('src', "/assets/item.jpg");
  }
  

}
