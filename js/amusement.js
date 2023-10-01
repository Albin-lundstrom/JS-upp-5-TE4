console.log("🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯") 

createVisitor = (name, age, ticketId) => visitor = {name, age, ticketId}

// const visitor = {
//     name: 'Verena Nardi',
//     age: 45,
//     ticketId: 'H32AZ123',
// };
  

function revokeTicket (visitor){
    visitor.ticketId = null
    return visitor;
}
console.log(createVisitor('Verena Nardi', 45, 'H32AZ123'))
console.log(revokeTicket(visitor))

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};

ticketStatus = (tickets, status) =>{
    if (tickets[status] == null){
        return "not sold";
    }
    else if(tickets[status] == undefined){
        return "Not a real ticket";
    }
    else{
        return `sold to ${tickets[status]}`;
    }
}

console.log(ticketStatus(tickets, "23LA9T41"))