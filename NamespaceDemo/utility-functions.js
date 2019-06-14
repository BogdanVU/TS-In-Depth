var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBookAllowed(age) {
        return age < 13 ? 3 : 10;
    }
    Utility.maxBookAllowed = maxBookAllowed;
    function privateFunction() {
        console.log("This is private function");
    }
})(Utility || (Utility = {}));
