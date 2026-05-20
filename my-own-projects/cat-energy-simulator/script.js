const cat = {
name: "Maja",
    energy: 100,
    run: function () {
        this.energy = this.energy - 10;
        console.log("Maja runs and now has " + this.energy + " energy");
    },
    fight: function () {
       this.energy = this.energy - 25;
        console.log("Maja fights and now has " + this.energy + " energy");
    },
    rest: function () {
        this.energy = this.energy + 20;
        console.log("Maja rests and now has " + this.energy + " energy");
    },
    status: function() {
        if (this.energy <= 0) {
            console.log("Maja collapsed from exhaustion");
        } else if (this.energy <= 30) {
            console.log("Maja is mad");
        } else if (this.energy <= 0) {
            console.log("Maja is unconscious");
        } else {
            console.log("Maja is calm");
        }
    },

    eat: function () {
        this.energy = this.energy + 20;
        console.log("Maja eats and now has " + this.energy + " energy");
    },

    sleep: function() {
        this.energy = this.energy + 40;
        console.log("Maja sleeps and now has " + this.energy + " energy");
    },
    

};

cat.run();
cat.fight();
cat.rest();
cat.status();
cat.eat();
cat.sleep();
