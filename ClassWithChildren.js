class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);



  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');
  // inserts at index 1
  console.log(months);
  // expected output: Array ["Jan", "Feb", "March", "April", "June"]
  
  months.splice(4, 1, 'May');
  // replaces 1 element at index 4
  console.log(months);
  // expected output: Array ["Jan", "Feb", "March", "April", "May"]