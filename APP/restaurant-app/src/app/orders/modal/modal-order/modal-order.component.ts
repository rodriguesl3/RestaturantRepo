import { Component, OnInit, Inject } from '@angular/core';
import { Order } from '../../model/order';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent implements OnInit {

  totalPrice: number;
  tableDescription: string;


  constructor(public dialogRef: MatDialogRef<ModalOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order) { }

  ngOnInit() {
    this.tableDescription = this.data.table.description;
    this.totalPrice = this.data.totalPrice;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSendClick(message: string): void {
    this.dialogRef.close(message);
  }
}
