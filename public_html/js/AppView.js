(function ($) {
    window.AppView = Backbone.View.extend({
        el: $("body"),
        initialize: function () {
            // reference to this connects view and collection
            this.expenses = new Expenses(null, {view: this});
        },
        events: {
            "click #add-expense": "showPrompt",
        },
        showPrompt: function () {
            var merchantName = prompt("Enter a merchant name: ");
            var expenseDate = prompt("Enter an expense date: ");
            var amount = prompt("Enter an amount: ");
            var expense = new Expense({merchantName: merchantName, date: expenseDate, amount: amount});
            this.expenses.add(expense);
            console.log(expense);
        },
        addExpenseLi: function (model) {
            $("#expense-list").append("<li>" + model.get("merchantName") 
                    + " | " + model.get("date") + " | " 
                    + model.get("amount") + "</li>");
        }
    });
    var appView = new AppView();
})(jQuery);