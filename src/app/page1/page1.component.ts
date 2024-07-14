import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  imageCoverUrl1 = '/image/image2.png'
  //major = 'Programmer'
  onImageClick(){
    alert("สวัสดีจ้าาาาาาาาา")
  }
  

}
