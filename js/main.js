const rightResult = function (num) {
    return num ** num;
};

const studentLabs = [
    {
        student: 'Bayraktar',
        runLab: function (number) {
            return Math.pow(number, number);
        }
    },
    {
        student: 'Taras',
        ranLab: function (number) {
            return number ** number;
        }
    },
    {
        student: 'Marichka',
        runLab: function (number) {
            return number * number;
        }
    },
];

function gradeLabs(labs) {
    for (let i = 0; i < labs.length; i++) {
        let lab = labs[i];
        try {
            let result = lab.runLab(4);
            console.log(`Calculation of ${lab.student} works: ${result === rightResult(4)}`);
        } catch(error) {
            result = 'Error thrown';
            console.error(`Calculation of ${lab.student}: ${result}`);
            console.error(`${error.name}: ${error.message}`);
        }
    }
}

gradeLabs(studentLabs);