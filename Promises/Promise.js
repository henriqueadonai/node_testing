var onLine = true;

var dataJSON = {
    Employee: "RolesTesting",
    ID: 1,
    IsComplete: null,
    IsSynced: 0,
    Notes: null,
    StatusDate: "2017-08-22T19:59:25Z",
    StatusID: 4,
};

var returnAPI = {
    AccountID: 0,
    BuildingID: 0,
    IsError: false,
    Message: "mostrand API MESSAGE",
    NewID: 111111,
    NewNumber: null,
    OldID: 0,
    OldNumber: null,
    Type: "API"
};


function TestingPromises(statudid) {
        return new Promise(function (resolve, reject) {
            uploadWorkRequestStatus(statudid).then(function(result){
                console.log("sync 1");
                return "SYNC";
            }).then(function(){
                console.log("sync 2");
                resolve(1);
            }).catch(function(result){
                var _message = "ERRO SYNC 3" 
                    if (result) {
                        if (result.Message) {
                            _message = result.Message;
                        }
                        else {
                            _message = result;
                        }
                    }
                console.log(_message)
                reject("ERROO")
            });
        });

    };

function uploadWorkRequestStatus (statusID) {
        return new Promise(function (resolve, reject) {
            if (onLine) {
                console.log(111);
                getWorkRequestStatusForUpload(statusID).then(function (data) {
                    console.log(222);
                    if (data) {
                        console.log(333);
                        var msg = [];
                        console.log(444);
                        msg.push(returnAPI);
                        console.log(555);
                        return msg;
                    } else {
                        return reject(null);
                    }
                }).then(function (msr) {
                    console.log(666)
                    if(msr === null){
                        console.log("null");
                        reject(null);
                    }
                    else if (msr[0].IsError) {
                        console.log(statusID + "/WorkRequests/mobileworkrequestsstatus Post" + msr);
                        reject(msr[0]);
                    }
                    else {
                        console.log(777)
                        console.log(msr[0]);
                        resolve(msr[0]);
                    }
                }).catch(function (msr) {
                    console.log(' CATCH');
                    reject(msr[0]);
                });
            }
            else {
                console.log("FAILED");
                reject("FAILED");
            }
        });
};

function getWorkRequestStatusForUpload(statusID){
    return new Promise(function (resolve, reject) {
    if(statusID === 1){
        console.log("returning Json")
        resolve(dataJSON);
    }else{
        resolve(null);
    }
    });
};

TestingPromises(3);

