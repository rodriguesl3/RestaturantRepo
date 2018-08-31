import { Component, OnInit } from '@angular/core';
import { Table } from './model/table';
import { Observable } from 'rxjs';
import { TablesService } from './service/tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tableList: Table[];
  errorMessage: string;

  constructor(private _tbService: TablesService) { }

  ngOnInit() {
    this.getTables();
  }

  getTables(): void {
    this._tbService.getTables().subscribe(tbls => this.tableList = tbls, err => this.errorMessage = err);
  }



}
