// Stack Operations
let stack = [];

function pushToStack() {
    let value = getRandomNumber();
    stack.push(value);
    renderStack('push');
}

function popFromStack() {
    stack.pop();
    renderStack('pop');
}

function sizeOfStack() {
    showModal(`Size of stack: ${stack.length}`);
}

function renderStack(action) {
    const stackContainer = document.getElementById('stack');
    stackContainer.innerHTML = '';
    stack.forEach((element, index) => {
        const div = document.createElement('div');
        div.className = 'element';
        div.textContent = element;
        if (index === stack.length - 1 && action === 'push') {
            div.classList.add('push-animation');
            setTimeout(() => {
                div.classList.remove('push-animation');
            }, 300);
        }
        stackContainer.appendChild(div);
    });

    if (action === 'pop') {
        const div = document.createElement('div');
        div.className = 'element pop-animation';
        div.textContent = stack[stack.length - 1];
        stackContainer.appendChild(div);
        setTimeout(() => {
            div.remove();
            renderStack();
        }, 300);
    }
}

// Queue Operations
let queue = [];

function enqueue() {
    let value = getRandomNumber();
    queue.push(value);
    renderQueue();
}

function dequeue() {
    queue.shift();
    renderQueue();
}

function sizeOfQueue() {
    showModal(`Size of queue: ${queue.length}`);
}

function renderQueue() {
    const queueContainer = document.getElementById('queue');
    queueContainer.innerHTML = queue.map(item => `<div class="item">${item}</div>`).join('');
}

// Linked List Operations
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.renderLinkedList();
    }

    remove(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous = null;
            while (current && current.data !== data) {
                previous = current;
                current = current.next;
            }
            if (current) {
                previous.next = current.next;
            }
        }
        this.renderLinkedList();
    }

    traverse() {
        let current = this.head;
        let elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        showModal(`Elements in the linked list: ${elements.join(', ')}`);
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    renderLinkedList() {
        let current = this.head;
        const linkedListContainer = document.getElementById('linkedlist');
        linkedListContainer.innerHTML = '';
        while (current) {
            linkedListContainer.innerHTML += `<div class="item">${current.data}</div>`;
            current = current.next;
        }
    }
}

let linkedList = new LinkedList();

function insertIntoLinkedList() {
    let value = getRandomNumber();
    linkedList.insert(value);
}

function deleteFromLinkedList() {
    showModalPrompt();
}

function traverseLinkedList() {
    linkedList.traverse();
}

function sizeOfLinkedList() {
    showModal(`Size of linked list: ${linkedList.size()}`);
}

// Array Operations
let array = [];

function insertIntoArray() {
    let value = getRandomNumber();
    array.push(value);
    renderArray();
}

function deleteFromArray() {
    array.pop();
    renderArray();
}

function accessArray() {
    if (array.length) {
        let index = Math.floor(Math.random() * array.length);
        showModal(`Value at index ${index}: ${array[index]}`);
    } else {
        showModal('Array is empty');
    }
}

function sizeOfArray() {
    showModal(`Size of array: ${array.length}`);
}

function renderArray() {
    const arrayContainer = document.getElementById('array');
    arrayContainer.innerHTML = array.map(item => `<div class="item">${item}</div>`).join('');
}

// Utility function to get a random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function showModal(message) {
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


function closeModalPrompt() {
    const modalPrompt = document.getElementById('modal-prompt');
    modalPrompt.style.display = 'none';
}

function confirmDeleteFromLinkedList() {
    let value = document.getElementById('delete-input').value.trim();
    linkedList.remove(parseInt(value));
    closeModalPrompt();
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
function showModalPrompt() {
    const deleteInput = document.getElementById('delete-input');
    deleteInput.value = ''; // Clear the input field
    const modalPrompt = document.getElementById('modal-prompt');
    modalPrompt.style.display = 'block';
}

