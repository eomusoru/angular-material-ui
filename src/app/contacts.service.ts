import { Injectable } from '@angular/core';

interface IContact {
  name: string;
  number: string;
}
@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(){
    let contacts: IContact[] = [
      {
        name: 'Janez',
        number: '121121211'
      },
      {
        name: 'John',
        number: '5544543'
      },
      {
        name: 'Edd',
        number: '212442555'
      },
      {
        name: 'Daniela',
        number: '098908'
      }
    ];
    return contacts;
  }

}
