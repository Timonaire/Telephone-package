class TelephonePackage {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
    
    // Addition of a phone number to the list
    addPhoneNumber(number) {
      this.phoneNumbers.push(number);
    }
    
    // Removing a phone number from the list
    removePhoneNumber(number) {
      this.phoneNumbers = this.phoneNumbers.filter(p => p !== number);
    }
    
    // Dialing a phone number in the list
    dialNumber(number) {
      if (!this.phoneNumbers.includes(number)) {
        console.log(`Error: Can't find  ${number} in the phonebook `);
        return;
      }
      this.notifyObservers(number);
    }
    
    // Adding an observer
    addObservers(observer) {
      this.observers.push(observer);
    }
    
    // Removing an observer
    removeObservers(observer) {
      this.observers = this.observers.filter(o => o !== observer);
    }
    
    // Notifying observers
    notifyObservers(number) {
      this.observers.forEach(observer => observer.notify(number));
    }
  }
  
  class FirstObserver {
    constructor() {
      this.notify = function(number) {
        console.log(number);
      }
    }
  }
  
  class SecondObserver {
    constructor() {
      this.notify = function(number) {
        console.log(`Now Dialling ${number}`);
      }
    }
  }
  
  const phone = new TelephonePackage();
  const observer1 = new FirstObserver();
  const observer2 = new SecondObserver();
  
  phone.addObservers(observer1);
  phone.addObservers(observer2);
  phone.addPhoneNumber('2347023232');
  phone.dialNumber('2347023232'); 