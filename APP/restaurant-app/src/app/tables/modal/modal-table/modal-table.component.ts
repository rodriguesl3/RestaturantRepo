import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Table } from '../../model/table';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent implements OnInit {
  updateTable: Table;

  fgTable = new FormGroup({
    description: new FormControl(''),
    numberAlias: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<ModalTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Table) { }

  ngOnInit() {
    this.fgTable.controls.description.setValue(this.data.description);
    this.fgTable.controls.numberAlias.setValue(this.data.numberAlias);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSendClick(fgTable: FormGroup): void {
    this.data.description = this.fgTable.value.description;
    this.data.numberAlias = this.fgTable.value.numberAlias;
    this.dialogRef.close(this.data);
  }

}

