import { Component, OnInit, Inject } from '@angular/core';
import { ItemsService } from '../../../items/service/items.service';
import { Items } from '../../../items/model/items';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Table } from '../../../tables/model/table';

@Component({
  selector: 'app-modal-create-order',
  templateUrl: './modal-create-order.component.html',
  styleUrls: ['./modal-create-order.component.css']
})
export class ModalCreateOrderComponent implements OnInit {

  itemList: Items[];
  itemSelection: any;
  itemSelected: Items[];


  constructor(
    public dialogRef: MatDialogRef<ModalCreateOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Table,
    private _itemService: ItemsService) { }

  ngOnInit() {
    var foo = this.data;
    this.getItems();
    this.itemSelected = [];
  }

  selectingItem(item: Items) {
    this.itemSelected.push(item);
  }

  getItems(): void {
    this._itemService.getItems().subscribe(res => {
      this.itemList = res;
    });
  }
  
  onSendClick() {
    this.dialogRef.close(this.itemList);
  }

}
