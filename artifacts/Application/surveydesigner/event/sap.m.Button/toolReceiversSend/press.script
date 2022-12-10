const selectedItems = tabReceivers.getSelectedItems();

const receivers = [];

if (selectedItems) {
    selectedItems.forEach((item) => {
        const context = item.getBindingContext("SurveyMaster");
        const data = context.getObject();
        receivers.push(data);
    });

    formBuilder.sendEmails(receivers);
}
