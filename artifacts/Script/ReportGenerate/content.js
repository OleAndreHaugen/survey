let responses = req.body;

// Format illigal characters
responses.questions.forEach(function (question) {
    question.responses.forEach(function (response) {
        response.text = response.text.replaceAll('\t','');
        response.text = response.text.replaceAll('\b','');
    });
});


const pdfData = await p9.pdf.generatePdf({
    pdfName: "surveyreport",
    body: responses
});

result.data = pdfData;
complete();