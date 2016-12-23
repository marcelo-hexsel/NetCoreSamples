# NetCoreSamples

Samples os what can be done in asp.net core 1.0

# Windows
1 - Visual Studio Community 2015 (Update 3)

2 - To compile Angular 2.2.4 with Visual Studio Community 2015, you need to install TypeScript 2.0 for VS: 
    * https://www.microsoft.com/en-us/download/details.aspx?id=48593

3 - After TypeScript is installed, you must delete your folder from node_modules (if exists) and wait for VS to download the modules again.

5 - Build the Application.

# Linux or Mac

1 - Visual Studio Code or an editor of your choice.

2 - Install TypeScript run the command: "npm install -g typescript@~2.0.10".

3 - Install Gulp run the command: "npm install -g gulp@3.8.11".

4 - After run "npm install" to download the modules.

5 - After run "gulp build" command to compile the source code.

6 - Run "donet restore" and "donet build".

7 - Run "dotnet run" to run the application.
