import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DatePipe, DecimalPipe, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tool List';
  // imageCoverUrl = '/image/image4.png'
  major = 'Programmer'

  items=[
    "A","B","C","D","E"
  ]

  size = "L"

  now = new Date()
  number = 1560

  name = new FormControl('')

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  profileSubmit(){
    console.log(this.profileForm.valid)
    console.log(this.profileForm.value)
  }

  products = [
    {id :1, name:'T-Shirt', size:'M', price:390, releaseDate: new Date()},
    {id :2, name:'Shirt', size:'L', price:290, releaseDate: new Date()},
    {id :3, name:'Polo Shirt', size:'XL', price:300.5, releaseDate: new Date()},
    {id :4, name:'Derss', size:'M', price:490, releaseDate: new Date()},
    {id :5, name:'Jacket', size:'XXL', price:5900, releaseDate: new Date()}
  ]
}
