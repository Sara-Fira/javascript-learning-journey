const car = {
  make: "Ford",
  model: "F-150",
  basePrice: 72000,
  options: {
    leatherSeats: 2400,
    sunroof: 100,
    navigationSystem: 1650,
  },
  calculateTotalPrice() {
    const totalPrice =
      this.basePrice +
      this.options.leatherSeats +
      this.options.sunroof +
      this.options.navigationSystem;
    console.log("Total price is", totalPrice);
  },
};

car.calculateTotalPrice();