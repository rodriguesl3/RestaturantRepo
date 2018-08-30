# Restaurant Repo

This project is practice study using full stack application, 
using .Net Core with EF Code First Migration and Angular 6.

All projects are developed using VS Code without solution and all references was applied with .Net CLI.


### Prerequisites

Necessary to install .net core sdk and .net core runtime, angular/cli.

After all stuff intalled, you need to restore each part of archtecture (Backend and frontend)
1) Restoring backend
    1.1 - open terminal on API Folder
    1.2 - restore backend application using 'dotnet restore'
    1.3 - make sure appsettings.json is configured with  your database credentials
    1.4 - update SQL Server application using Migration using net cli command 'dotnet ef database update --startup-project ..\Cedris.Restaurant.API\ --context EfDbContext'
    1.5 - accessing API project, build your api project using 'dotnet build'
    1.6 - if all previous steps were successfully, run API project executing 'dotnet run'

2) Restoring frontend 
    2.1 - open terminal on APP/restaurant-app Folder
    2.2 - restore all references running 'npm install'
    2.3 - make sure you angular version install are compatible with this project
    2.4 - run angular cli command 'ng serve -o' to execute on browser
        





## Getting Started

using git clone on URL repo, restore all references in backend application using dotnet restore 
and restore all references in frontend application using npm install

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
