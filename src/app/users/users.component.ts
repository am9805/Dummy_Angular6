import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;

  constructor(private data: DataService) { }

  //Es uno de los lifecycle hooks de angular para los componentes
  //Cualquier comando ejecutado aqui, va a ser ejecutado cuando este componente
  //cargue
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}
