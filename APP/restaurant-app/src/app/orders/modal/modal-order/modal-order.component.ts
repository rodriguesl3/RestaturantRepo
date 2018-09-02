import { Component, OnInit, Inject } from '@angular/core';
import { Order } from '../../model/order';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent implements OnInit {


  updateOrder: Order;
  status: string;

  fgOrder = new FormGroup({
    description: new FormControl(''),
    numberAlias: new FormControl(''),
    status: new FormControl('')
  });


  constructor(public dialogRef: MatDialogRef<ModalOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order) { }

  ngOnInit() {
    // this.fgOrder.controls.description.setValue(this.data.description);
    // this.fgOrder.controls.numberAlias.setValue(this.data.numberAlias);
    // this.fgOrder.controls.status.setValue(this.data.status);
    // this.status = this.data.status.toString();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSendClick(fgTable: FormGroup): void {
    // this.data.description = this.fgOrder.value.description;
    // this.data.numberAlias = this.fgOrder.value.numberAlias;
    // this.data.status = this.fgOrder.value.status;
    // this.dialogRef.close(this.data);
  }



}
