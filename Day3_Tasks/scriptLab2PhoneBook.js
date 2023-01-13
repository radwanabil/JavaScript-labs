var contacts = [
    {
        name: "radwa",
        phone: "123"
    }
]

function addContact() {
    var newContact = {};
    newContact.name = prompt("Enter contact name:");
    newContact.phone = prompt("Enter contact phone:");
    contacts.push(newContact);
}

function searchContact() {

    var search = prompt("Enter contact name or phone:");

    for (let i = 0; i < contacts.length; i++) {
        var currentContact = contacts[i];
        if (search == currentContact.name || search == currentContact.phone) {
            alert("Contact name = " + currentContact.name + "\nphone = " + currentContact.phone);
            break;
        }

    }
}

function phoneBook() {
    var stop = false;
    do {
        var operation = prompt("Do you want to (add,search,exit) our phone book");
        switch (operation) {
            case "add":
                addContact();
                break;
            case "search":
                searchContact();

                break;
            case "exit":
                stop = true;
                break;

        }
    } while (!stop)
}

phoneBook();