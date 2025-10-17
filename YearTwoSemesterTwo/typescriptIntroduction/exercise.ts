// === Exercise One ===
function exerciseOne() {
    // Part A: function counting characters in string
    function countCharacters(input: string): number {
        return input.length;
    }

    // Part B: function counting characters in trimmed string
    function countCharactersTrim(input: string): number {
        return input.trim().length;
    }

    // Part C: function counting characters in optionally trimmed string
    function countCharactersTrimOption(input: string, option: boolean): number {
        if (option) return input.trim().length;
        return input.length;
    }

    console.log("=== Exercise One ===");
    console.log("Output from countCharacters function \" test 1 \": " + countCharacters(" test 1 ")); // Output: 8
    console.log("Output from countCharactersTrim function \" test 1 \": " + countCharactersTrim(" test 1 ")); // Output: 6
    console.log("Output from countCharactersTrimOption (true) function \" test 1 \": " + countCharactersTrimOption(" test 1 ", true)); // Output: 6
    console.log("Output from countCharactersTrimOption (false) function \" test 1 \": " + countCharactersTrimOption(" test 1 ", false)); // Output: 8
    console.log(""); // Space after section
}

// === Exercise Two ===
function exerciseTwo() {
    let tasks: string[] = [];

    function addTask(task: string): number {
        tasks.push(task);
        console.log(`Task "${task}" added to the list.\n`);
        return tasks.length;
    }

    function listAllTasks(): void {
        console.log("Tasks:");
        tasks.forEach(task => console.log(task));
        console.log("");
    }

    function deleteTask(task: string): number {
        const index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
            console.log(`Task "${task}" removed from the list.\n`);
        } else {
            console.log(`Task "${task}" not found.\n`);
        }
        return tasks.length;
    }

    console.log("=== Exercise Two ===");
    addTask("Do groceries");
    addTask("Dust the furniture");
    listAllTasks();
    deleteTask("Do groceries");
    deleteTask("Go to work");
    listAllTasks();
    console.log(""); // Space after section
}

// === Exercise Three ===
function exerciseThree() {
    interface TaskManager {
        tasks: string[];
        addTask(task: string): number;
        listAllTasks(): void;
        deleteTask(task: string): number;
    }

    class TaskList implements TaskManager {
        tasks: string[] = [];

        addTask(task: string): number {
            let length: number = this.tasks.push(task);
            console.log(`Task "${task}" added to the list.\n`);
            return length;
        }

        listAllTasks(): void {
            console.log("Tasks:");
            this.tasks.forEach(task => console.log(task));
            console.log("");
        }

        deleteTask(task: string): number {
            const index = this.tasks.indexOf(task);
            if (index > -1) {
                this.tasks.splice(index, 1);
                console.log(`Task "${task}" removed from the list.\n`);
            } else {
                console.log(`Task "${task}" not found.\n`);
            }
            return this.tasks.length;
        }
    }

    console.log("=== Exercise Three ===");
    const myTasks = new TaskList();
    myTasks.addTask("Do groceries");
    myTasks.addTask("Dust the furniture");
    myTasks.listAllTasks();
    myTasks.deleteTask("Do groceries");
    myTasks.deleteTask("Go to work");
    myTasks.listAllTasks();
}

// Run all exercises
exerciseOne();
exerciseTwo();
exerciseThree();