const selectedItems = tabReceivers.getSelectedItems();

if (selectedItems) {
    selectedItems.forEach((item) => {
        const context = item.getBindingContext("SurveyMaster");
        const data = context.getObject();
        formBuilder.resetReceivers(data.id);
    });
}
