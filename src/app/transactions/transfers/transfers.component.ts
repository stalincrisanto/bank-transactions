import { Component } from '@angular/core';
import { Transfer } from '../../types/transfer';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent {

  public transferInput: Transfer = {
    payer: "",
    beneficiary: "",
    value: "",
    date: "",
    reference: ""
  };

  addTransaction(){
    // TODO: send data to service
    console.log("datos", this.transferInput);
  }
}
