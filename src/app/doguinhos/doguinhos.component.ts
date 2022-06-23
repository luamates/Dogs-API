import { Component, OnInit } from '@angular/core';
import { Doguinho } from '../doguinhos';
import { DoguinhosService } from '../doguinhos.service';

@Component({
  selector: 'app-doguinhos',
  templateUrl: './doguinhos.component.html',
  styleUrls: ['./doguinhos.component.css']
})
export class DoguinhosComponent implements OnInit {

  doguinho?: Doguinho;

  constructor(private doguinhoService: DoguinhosService) { }

  ngOnInit(): void {
  }

  getDog(): void {
    this.doguinhoService.getDog().subscribe((doguinho) => {
      this.doguinho = doguinho;
    })
  }

}


