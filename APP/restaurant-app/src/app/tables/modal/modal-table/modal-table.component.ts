import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Table } from '../../model/table';

@Component({
  selector: 'app-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent {
  updateTable: Table;

  constructor(public dialogRef: MatDialogRef<ModalTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

   
    onNoClick(): void {
      debugger;
      this.updateTable = this.data;
      this.dialogRef.close(this.updateTable);
    }
}

