# NetCoreSamples

Samples os what can be done in asp.net core 1.0

## Prerequisites
[Node.js and npm](https://docs.npmjs.com/getting-started/installing-node) are required.
The app was build using TypeScript and Gulp. 
   Run `npm install -g typescript@~2.0.10` to install it.
   Run `npm install -g gulp@3.8.11` to install it.
   
## Required packages
Run `npm install` or `gulp install` to install required node packages.

## Windows

1 - Visual Studio Community 2015 (Update 3)

2 - To compile Angular 2.2.4 with Visual Studio Community 2015, you need to install TypeScript 2.0 for VS: 
    * https://www.microsoft.com/en-us/download/details.aspx?id=48593

3 - After TypeScript is installed, you must delete your folder from node_modules (if exists) and wait for VS to download the modules again.

5 - Build and Run the Application.

## Linux or Mac

1 - Visual Studio Code or an editor of your choice.

2 - Uncomment `UseUrls` in Program.cs

2 - After run `gulp build` command to compile the source code.

3 - Run `donet restore` and `donet build`.

4 - Run `dotnet run` to run the application.

## Application Address

1 - NetCoreSamples: http://*:8089

2 - NetCoreSamples.API: http://*:8090
