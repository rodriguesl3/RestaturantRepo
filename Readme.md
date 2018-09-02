# Restaurant Repo

This project is practice study using full stack application, 
using .Net Core with EF Code First Migration and Angular 6.

All projects are developed using VS Code without solution and all references was applied with .Net CLI.


### Prerequisites

Necessary to install .net core sdk and .net core runtime, angular/cli.

After all stuff intalled, you need to restore each part of archtecture (Backend and frontend)

## 1) Restoring backend

    1.1 - open terminal on API Folder

    1.2 - restore backend application using 'dotnet restore'

    1.3 - make sure appsettings.json is configured with  your database credentials

    1.4 - update SQL Server application using Migration using net cli command 'dotnet ef database update --startup-project ..\Cedris.Restaurant.API\ --context EfDbContext'

    1.5 - accessing API project, build your api project using 'dotnet build'

    1.6 - if all previous steps were successfully, run API project executing 'dotnet run'


## 2) Restoring frontend 

    2.1 - open terminal on APP/restaurant-app Folder

    2.2 - restore all references running 'npm install'

    2.3 - make sure you angular version install are compatible with this project

    2.4 - run angular cli command 'ng serve -o' to execute on browser
        

using git clone on URL repo, restore all references in backend application using dotnet restore 
and restore all references in frontend application using npm install

## Overview System

* Table screen - on this screen you are able to list all tables inside of restaurant. If you want to edit just click on table to open modal an change detais from that. It has a button to add a new table if necessary.

* Item screen - list all items to create a new order, is possible to edit if is necessary or add new one as well, clicking on "Adicionar Item"

* Order screen - list all tables are occupied and through this view you can add new order or show the price that customer need to pay.