// Task 1: Create a Customer class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }
  
    // Method to add a new purchase
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    // Method to get total spent
    getTotalSpent() {
      return this.purchaseHistory.reduce((sum, purchase) => sum + purchase, 0);
    }
  }
  
  // Log
  const customer1 = new Customer("Krupa", "krupa@email.com");
  customer1.addPurchase(200);
  customer1.addPurchase(150);
  console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`);
  //  Task 2: SalesRep Class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    addClient(customer) {
      this.clients.push(customer);
    }
  
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }
  
  //  Log
  const salesRep = new SalesRep("Betty");
  salesRep.addClient(customer1);
  console.log(`SalesRep: ${salesRep.name}, Client: ${customer1.name}, Total Spent: $${salesRep.getClientTotal("Krupa")}`);
  // Task 3 - VIPCustomer Class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
  
    // Override getTotalSpent with 10% bonus
    getTotalSpent() {
      const baseTotal = super.getTotalSpent();
      return baseTotal + baseTotal * 0.10; // 10% bonus
    }
  }
  
  // Log
  const vipCustomer = new VIPCustomer("Sandra Simon", "sandrasimon@email.com", "Gold");
  vipCustomer.addPurchase(600);
  vipCustomer.addPurchase(100);
  console.log(`VIP Customer: ${vipCustomer.name}, Total with Bonus: $${vipCustomer.getTotalSpent()}`);
  // Task 4: Build a Client Report System
  // adding new client
const customer2 = new Customer("Joe Johnson", "JoeJohnson@gmail.com");
customer2.addPurchase(150); 
const customer3 = new VIPCustomer("Amy Thomas", "AmyThomas@gmail.com" ,"Gold");
customer3.addPurchase(500);

salesRep.addClient(customer2);
salesRep.addClient(customer3);

const allCustomers = [customer1, customer2, customer3,vipCustomer];
// Calculating total revenue
const totalRevenue = allCustomers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
console.log(`Total Revenue: $${totalRevenue}`); // Total Revenue: $1660

const highestSpender = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log("Highest Spenders:", highestSpender.map(customer => customer.name));

const customerReport = allCustomers.map(customer => ({
    name: customer.name,
    totalSpent: customer.getTotalSpent(),
}));// Create a report of all customers
console.log("Customer Report:", customerReport);
  