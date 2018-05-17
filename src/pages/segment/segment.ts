import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { PhotosProvider } from '../../providers/photos/photos';
/**
 * Generated class for the SegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {
  usuarios;
  fotos;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public usuariosProvider: UsuariosProvider,
              public photosProvider: PhotosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

  downUsers(){
    this.usuariosProvider.tomeUsuarios().subscribe(
      (data) => {this.usuarios = data; console.log(this.usuarios)},
      (error) => {console.log(error);}
    )
  }

  downFotos(){
    this.photosProvider.tomeFotos().subscribe(
      (data) =>{this.fotos = data;},
      (error) =>{console.log(error);}
    )
  }


}
