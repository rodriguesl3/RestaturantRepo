import { Component, OnInit, Inject } from '@angular/core';
import { Table } from './model/table';
import { Observable } from 'rxjs';
import { TablesService } from './service/tables.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalTableComponent } from './modal/modal-table/modal-table.component';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tableList: Table[];
  errorMessage: string;
  updatedTable: Table;


  constructor(private _tbService: TablesService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getTables();
  }


  openDialog(table: Table): void {
    if (!table) {
      table = new Table();
    }
    const dialogRef = this.dialog.open(ModalTableComponent, {
      data: {
        "description": table.description || "",
        "numberAlias": table.numberAlias || "",
        "id": table.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.id)
        this.updateTable(result);
      else
        this.addTable(result);
    })
  }



  getTables(): void {
    this._tbService.getTables().subscribe(tbls => this.tableList = tbls,
      err => this.errorMessage = err);
  }

  updateTable(table: Table): void {

    this._tbService.updateTable(table).subscribe(res => {
      let idxOldTable = this.tableList.findIndex(x => x.id == res.id);
      this.tableList[idxOldTable] = table;
    })
  }

  addTable(newTable: Table): void {
    this._tbService.addTable(newTable).subscribe(res => { this.tableList.push(res) });
  }


}
