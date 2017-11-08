function workMyCollection(arr) {
    var resultArr = [];
    function _recursive(idx) {
        if (idx >= resultArr.length) return resultArr;
            
        return doSomethingAsync(arr[idx]).then(function(res) {
            resultArr.push(res);
            return _recursive(idx + 1);
        });
    }

    return _recursive(0);
}







        return new Promise(function (resolve, reject) {
        //    //var inspection = inspections[0];
            database.getScoredQuestions(inspection[0].ID).then(function (questions) {
                inspection[0].questions = questions;
            //    return database.getScoredAttributes(inspection[0].ID);
            //}).then(function (attributes) {
            //    inspection[0].attributes = attributes;
            //    return database.getScoredAttachments(inspection[0].ID);
            //}).then(function (attachments) {
        //        inspection[0].attachments = attachments;
        //        return database.getScoredAuditItems(inspection[0].ID);
        //    }).then(function (auditItems) {
        //        inspection[0].auditItems = auditItems;
        //        return app.database.getInspectionEmails(inspection[0].ID);
        //    }).then(function (emailData) {
        //        inspection[0].emailSetting = emailData;

                if (inspection.length <= 1) {
                    return resolve(inspection);
                }


                return _.union(resolve(app.database.PushInspectionOffline(inspection.slice(1))), inspection.slice(0, 1));
                //Funciona
                //return _.union(app.database.PushInspectionOffline(inspection.slice(1)), inspection.slice(0,1));
                
            });

        });
