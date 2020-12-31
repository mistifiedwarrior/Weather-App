const event = {
  name: 'Birthday party',
  guestList: ['AADII', 'MUNMUN', 'ADITYA'],
  printGuestList() {
    console.log('Guest list for' + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
    });
  },
};
event.printGuestList();
