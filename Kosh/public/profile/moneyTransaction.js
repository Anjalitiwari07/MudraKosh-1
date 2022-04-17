let percFromEachInv = 0.1; //10% taken from each investor on iteration until loan amount is satisfied
//let loanNeeded = 50000;



firebase.database().ref('MudraKosh/loans/loanNum').once('value', (snap) => {
    var totalLoans = snap.val();
    for (var loanID = 1; loanID <= totalLoans; loanID++) {
        firebase.database().ref('MudraKosh/loans/' + loanID + '/loanAmt').once('value', (snap) => {
            let loanNeededStr = snap.val();
            let loanNeeded = parseInt(loanNeededStr);
            console.log("Loan Needed: " + loanNeeded);

            firebase.database().ref('MudraKosh/investments/userNum').once('value', (snap) => {
                var totalUserNo = snap.val();
                console.log(totalUserNo);
                while (loanNeeded > 0) {

                    for (var investorID = 1; investorID <= totalUserNo; investorID++) {
                        console.log(investorID);
                        /*firebase.database().ref('MudraKosh/investments/' + investorID + '/invAmt').once('value', (snap) => {
                            console.log("Investor ID: " + investorID);
                            var investmentVal = snap.val();
                            console.log("Initial Amount in investor " + investorID + ":" + investmentVal)
                            var subtractFromInv = investmentVal * percFromEachInv;
                            //loanNeeded = loanNeeded - 30000;
                            /* if (loanNeeded < investmentVal * percFromEachInv) {
                                investmentVal = investmentVal - loanNeeded;
                                loanNeeded = 0;
                            } else {
                                loanNeeded = loanNeeded - investmentVal * percFromEachInv;
                                investmentVal = investmentVal - subtractFromInv;
                            }
                            console.log("Loan Needed: " + loanNeeded);
                            console.log("Amount subtracted from investor " + investorID + ": " + subtractFromInv);
                            console.log("Amount left in investor " + investorID + ": " + investmentVal); 
                        });*/
                        loanNeeded = loanNeeded - 20000;
                        console.log(loanNeeded);
                    }
                }

            });
        });
    }
});

//investmentAmt(1);

console.log(invVal);

let invVal = function investmentAmt(invID) {
    firebase.database().ref('MudraKosh/investments/' + invID + '/invAmt').once('value', (snap) => {
        var investmentVal = snap.val();
        console.log(investmentVal);
        return investmentVal;
    });
}

/* const investors = [123456, 12123100, 32421];
let totalInv = 2;
let loanNeeded = 50000;
let percFromEachInv = 0.1;


while(loanNeeded>0){
    for(var invNum = 0; invNum<=totalInv; invNum++){
        if(loanNeeded< investors[invNum]*percFromEachInv){
            
            investors[invNum] = investors[invNum] - loanNeeded;
            loanNeeded = 0;
        } else{
            loanNeeded = loanNeeded - investors[invNum]*percFromEachInv;
            investors[invNum] = investors[invNum] - investors[invNum]*percFromEachInv;
        }
        
        console.log("loanNeeded: " + loanNeeded);
        
        console.log("Amount left in investor " + invNum + ":" + investors[invNum])
    }
    
}
 */




/* firebase.database().ref('MudraKosh/loans/loanNum').once('value', (snap) => {
    var totalLoans = snap.val();
    for (var loanID = 1; loanID <= totalLoans; loanID++) {
        firebase.database().ref('MudraKosh/loans/' + loanID + '/loanAmt').once('value', (snap) => {
            let loanNeededStr = snap.val();
            let loanNeeded = parseInt(loanNeededStr);
            console.log("Loan Needed: " + loanNeeded);
            firebase.database().ref('MudraKosh/investments/userNum').once('value', (snap) => {
                var totalUserNo = snap.val();
                var investorID = 1;
                firebase.database().ref('MudraKosh/investments/' + investorID + '/invAmt').once('value', (snap) => {
                    console.log("Investor ID: " + investorID);
                    var investmentVal = snap.val();
                    console.log("Initial Amount in investor " + investorID + ": " + investmentVal);
                    var subtractFromInv = investmentVal * percFromEachInv;
                    while (loanNeeded > 0) {
                        for (investorID = 1; investorID <= totalUserNo; investorID++) {
                            if (loanNeeded < investmentVal * percFromEachInv) {
                                investmentVal = investmentVal - loanNeeded;
                                loanNeeded = 0;
                            } else {
                                loanNeeded = loanNeeded - investmentVal * percFromEachInv;
                                investmentVal = investmentVal - subtractFromInv;
                            }
                            console.log("Loan Needed: " + loanNeeded);
                            console.log("Amount left in investor " + investorID + ": " + investmentVal);
                        }
                    }

                });
            });
        });
    }
}); */