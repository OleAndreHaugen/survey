//@ts-ignore
jQuery.sap.require("sap.m.MessageBox");

sap.ui.getCore().attachInit(function (startParams) {
    const params = new URLSearchParams(window.location.search);

    const surveyid = params.get("surveyid");
    const link = params.get("link");

    if (surveyid && link) {
        apiStart({
            parameters: {
                surveyid,
                link,
            },
        }).then(function (res) {
            if (res.form && res.survey) {
                buildForm(panPreview, res.form, link, modelResponseData, surveyid, function () {
                    oApp.to("oPageSubmitted");
                });
            } else {
                oApp.to("oPageNotFound");
            }
        });
    } else {
        oApp.to("oPageNotFound");
    }
});
