import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  	private contacts: Array<object> = [];
	constructor(private apiService: APIService) { }
	ngOnInit() {
		this.getContacts();
	}
	public getContacts(){
		this.apiService.getContacts().subscribe((data: Array<object>) => {
			this.contacts = data;
			console.log(data);
		});
	}

}
