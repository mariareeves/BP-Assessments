/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "Git is version control system that enables developers to track changes, collaborate on projects, and manage source code effectively. It provides a way to organize code into repositories and allows users to create branches, make and record changes, and merge them seamlessly. Git maintains a history of commits, facilitating easy rollback to previous versions, and enables collaboration by supporting remote repositories for seamless teamwork."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/
const gitHubDefinition = "GitHub is a web-based platform and service that provides hosting for Git repositories. It offers additional features and functionalities on top of Git, such as a web interface for repository management, issue tracking, and collaboration tools. GitHub allows developers and teams to store, share, and collaborate on code repositories, making it easier to track changes, manage projects, and facilitate community contributions. It serves as a central hub for developers to showcase their work, contribute to open-source projects, and collaborate with others in a version-controlled environment."
//CODE HERE

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "The 'git init' command is used to initialize a new Git repository in the current directory. It creates a new, empty Git repository, sets up the necessary files and directories to manage version control, and prepares the directory to track changes to files. Once 'git init' is executed, the current directory becomes a Git repository, allowing you to start adding files, making commits, and utilizing other Git commands to manage and track changes to your project."
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = "The 'git clone' command is used to create a copy of a remote Git repository on your local machine. It allows you to download and initialize a complete copy of the remote repository, including all of its files, commit history, and branches. By using git clone, you can easily obtain a local working copy of a repository, enabling you to make changes, view the code, and collaborate on the project locally. This is especially useful when you want to contribute to an existing project or work on a repository from a different machine."
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "The 'git status' command is used to display the current status of the Git repository. It provides information about the modified, added, and deleted files in the working directory. It shows which files have been modified since the last commit and which files are staged for the next commit. It also shows untracked files that are not yet being tracked by Git. This command is useful for understanding the state of the repository, tracking changes, and determining the next steps to take, such as adding files to the staging area or committing changes."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = "The 'git add' command is used to add changes to the staging area in Git. It prepares modified or new files to be included in the next commit. By using 'git add', you specify which changes you want to include in the next commit. This command allows you to selectively choose the files or specific portions of files to be staged, making it possible to commit changes in a granular and controlled manner."

const gitAddCode = "git add ."
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = "The 'git commit' command is used to record the changes made to the files in the Git repository. It creates a new commit that represents a specific version of the project. Each commit in Git contains a unique identifier (SHA-1 hash), a commit message describing the changes, and a pointer to the previous commit. It allows you to save a snapshot of your project at a particular point in time, making it possible to track the history of changes and revert to previous versions if needed."

const gitCommitCode = "git commit -m 'initial commit'"
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = "The 'git push' command is used to upload local commits to a remote repository. It sends the committed changes from your local repository to a remote repository, making them accessible to others who have access to the remote repository. By using this command, you can update the remote repository with your local changes, ensuring that your changes are shared and synchronized with the central repository or with collaborators. It is commonly used to publish your local changes and collaborate with others in a distributed Git workflow."