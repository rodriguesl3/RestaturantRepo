import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Items } from '../../model/items';
import { ModalTableComponent } from '../../../tables/modal/modal-table/modal-table.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.css']
})
export class ModalItemComponent implements OnInit {

  fgItem = new FormGroup({
    description: new FormControl(''),
    price: new FormControl(''),
  });

  updateItems: Items;
  status: string;

  constructor(public dialogRef: MatDialogRef<ModalTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Items) { }

    ngOnInit() {
      this.fgItem.controls.description.setValue(this.data.description);
      this.fgItem.controls.price.setValue(this.data.price);
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    onSendClick(fgTable: FormGroup): void {
      this.data.description = this.fgItem.value.description;
      this.data.price = this.fgItem.value.price;
      this.dialogRef.close(this.data);
    }

}
