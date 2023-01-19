//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// Using Constructor functions
/*
function Person(fullName, money, sleepMode, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMode = sleepMode;
    this.healthRate = healthRate;
}
Object.assign(Person.prototype, {
    Sleep(hours) {
        if (hours == 7) {
            this.sleepMode = "Happy";
        } else if (hours < 7) {
            this.sleepMode = "Tired";
        } else if (hours > 7) {
            this.sleepMode = "Lazy";
        }
        return this.sleepMode
    }
    ,
    Eat(meals) {
        if (meals == 3) {
            this.healthRate = "100";
        } else if (meals == 2) {
            this.healthRate = "75";
        } else if (meals == 1) {
            this.healthRate = "50";
        }
        return this.healthRate
    },
    Buy(items) {
        if (items == 1) {
            this.money = this.money - 10;
        }
        return this.money
    }
})

const radwa = new Person("Radwa Nabil", 1000, "happy", "100");
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// Using classes

/*
class Person {
    constructor(fullName, money, sleepMode, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        this.healthRate = healthRate;
    }

    Sleep(hours) {
        if (hours == 7) {
            this.sleepMode = "Happy";
        } else if (hours < 7) {
            this.sleepMode = "Tired";
        } else if (hours > 7) {
            this.sleepMode = "Lazy";
        }
        return this.sleepMode
    }

    Eat(meals) {
        if (meals == 3) {
            this.healthRate = "100";
        } else if (meals == 2) {
            this.healthRate = "75";
        } else if (meals == 1) {
            this.healthRate = "50";
        }
        return this.healthRate
    }
    Buy(items) {
        if (items == 1) {
            this.money = this.money - 10;
        }
        return this.money
    }
}
const radwa = new Person("Radwa Nabil", 1000, "happy", "100");
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// Using OLOO

/*
const Person = {
    init(fullName, money, sleepMode, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        this.healthRate = healthRate;
        return this
    },
    Sleep(hours) {
        if (hours == 7) {
            this.sleepMode = "Happy";
        } else if (hours < 7) {
            this.sleepMode = "Tired";
        } else if (hours > 7) {
            this.sleepMode = "Lazy";
        }

        return this.sleepMode

    },

    Eat(meals) {
        if (meals == 3) {
            this.healthRate = "100";
        } else if (meals == 2) {
            this.healthRate = "75";
        } else if (meals == 1) {
            this.healthRate = "50";
        }
        return this.healthRate

    },
    Buy(items) {
        if (items == 1) {
            this.money = this.money - 10;
        }
        return this.money

    }
}

const radwa = Object.create(Person).init("Radwa Nabil", 1000, "happy", "100")
console.log(radwa);

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// Using Factory functions

/*
function Person(fullName, money, sleepMode, healthRate) {
    return {
        fullName,
        money,
        sleepMode,
        healthRate,
        Sleep(hours) {
            if (hours == 7) {
                this.sleepMode = "Happy";
            } else if (hours < 7) {
                this.sleepMode = "Tired";
            } else if (hours > 7) {
                this.sleepMode = "Lazy";
            }

            return this.sleepMode

        },

        Eat(meals) {
            if (meals == 3) {
                this.healthRate = "100";
            } else if (meals == 2) {
                this.healthRate = "75";
            } else if (meals == 1) {
                this.healthRate = "50";
            }
            return this.healthRate

        },
        Buy(items) {
            if (items == 1) {
                this.money = this.money - 10;
            }
            return this.money

        }
    }
}

const radwa = Person("Radwa Nabil", 1000, "happy", "100");
*/