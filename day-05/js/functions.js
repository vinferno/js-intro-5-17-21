// Benefits of Functions

// Names (helpful);
// Reusability
// Delay Usage ( callbacks, promises, observables )
// Scope (Encapsulation)



let manager = 'main execution context manager';

function dataDepartment() {
    let profit = 100;
    const manager = 'data manager';
    let lastSale = null;
    console.log(manager)
    return function createEmployee(name) {
       
        const employee =  {
            name: String(name),
            makeSale() {
                console.log('props to ', name, 'for making a sale!')
                profit += 10;
                console.log(lastSale, ' made the last sale');
                lastSale = name;
                return String(name);
            },
            readProfit() {
                console.log(profit);
                return profit;
            }

        }
        return employee;
    }

    // console.log(manager, profit);
}

const createEmployee = dataDepartment();
const dataGuy = createEmployee('dataGuy');
const dataEmployee = createEmployee('De');
const thirdEmployee = createEmployee('TE');



dataEmployee.readProfit(); // 100
dataEmployee.makeSale();  // 110
dataEmployee.readProfit(); // 110
dataGuy.readProfit(); // 110
dataGuy.makeSale(); // 120
dataGuy.readProfit(); // 120
thirdEmployee.readProfit(); // 120
thirdEmployee.makeSale(); // 130
thirdEmployee.readProfit(); // 130


 const noScope = () => {
     console.log(manager);
     return 1;
 }


 function greeting(name, age) {
     console.log('hello', name, age);
 }
greeting('Moe');

