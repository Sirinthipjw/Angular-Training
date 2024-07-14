import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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

  profileFormSubmit(){
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

  constructor(private http:HttpClient){

  }
  service_path = `https://66933899c6be000fa07a1844.mockapi.io/todo/v1/topic/`
  onGetAll(){
    console.log('---onGetALL--')
    // let id = 2
    // let url = `https://66933899c6be000fa07a1844.mockapi.io/todo/v1/topic/${id}`
    let url = this.service_path
    this.http.get(url).subscribe({
      next: (result) =>{
        console.log(result)
      }
    })
  }

  onGetById(){
    console.log('---onGetById--')
    let id = 2
    let url = `${this.service_path}/${id}`
    this.http.get(url).subscribe({
      next: (result) =>{
        console.log(result)
      }
    })
  }

  onPost(){
    console.log('---onPost--')
    let url = this.service_path
    let body = {
      "topic": "angula 1"
    }
    this.http.post(url,body).subscribe({
      next: (result) =>{
        console.log(result)
      }
    })

  }

  onPut(){
    console.log('---onPut--')
    let id = 9
    let url = `${this.service_path}/${id}`
    let body = {
      "topic": "angula 1 edit"
    }
    this.http.put(url,body).subscribe({
      next: (result) =>{
        console.log(result)
      }
    })

  }

  onDelete(){
    console.log('---onDelete--')
    let id = 11
    let url = `${this.service_path}/${id}`
    this.http.delete(url).subscribe({
      next: (result) =>{
        console.log(result)
      },
      error: (err) =>{
        console.log(err.error)
        alert(`${id} ${err.error}`)

      }
    })
  }


}




