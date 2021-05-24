import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-addfolder',
  templateUrl: './addfolder.component.html',
  styleUrls: ['./addfolder.component.scss'],
})
export class AddfolderComponent implements OnInit {
  itemImage='/assets/item.jpeg'

  constructor(private modalController : ModalController,private camera:Camera , private actionSheetController :ActionSheetController){ }

  ngOnInit() {}

  closeModal(){
   this.modalController.dismiss()
  }

  async takeSnap() {
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
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
}
