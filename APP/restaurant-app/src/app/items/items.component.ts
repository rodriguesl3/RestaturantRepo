import { Component, OnInit } from '@angular/core';
import { Items } from './model/items';
import { ItemsService } from './service/items.service';
import { Observable } from 'rxjs';
import { MatSnackBar, MatTableDataSource, MatDialog } from '@angular/material';
import { ModalItemComponent } from './modal/modal-item/modal-item.component';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})



export class ItemsComponent implements OnInit {
  displayedColumns: string[];
  dataSource: any;

  constructor(private _service: ItemsService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'description', 'price', 'image'];
    this.getItems();
  }

  openDialog(item: Items): void {
    if (!item) {
      item = new Items();
    }
    const dialogRef = this.dialog.open(ModalItemComponent, {
      data: {
        "description": item.description || "",
        "price": item.price || "",
        "id": item.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.id)
        this.updateItem(result);
      else
        this.addItem(result);
    })
  }



  searchFilter(filter: string){
    this.dataSource.filter = filter.trim().toLowerCase();
  }
  
  getItems(): void {
    this._service.getItems().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  addItem(item: Items): void {
    this._service.addItem(item).subscribe(res => {
      this.getItems();
      this.openSnackBar('Adicionado com sucesso', 'fechar')
    })
  }

  updateItem(item: Items): void {
    this._service.updateItem(item).subscribe(res => {
      this.openSnackBar('Alterado com sucesso', 'fechar');
      this.getItems();

    },
      err => {
        this.openSnackBar('Problema para alterar item - ' + err.message, 'fechar');
      })


  }

  removeItem(item: Items): void {
    alert('Removendo Item - ' + JSON.stringify(item));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
