(function ($) {
    AppView = Backbone.View.extend({
        el: $("body"),
        initialize: function () {
            // reference to this connects view and collection
            this.expenses = new Expenses(null, {view: this});
            this.render();
        },
        render: function() {
            var variables = { page_title: "Expenses",
                              form_label: "New Expense",
                              merchant_label: "Merchant",
                              amount_label: "Amount (CAD)",
                              date_label: "Date",
                              submit_expense: "Add Expense",
                              expenses_label: "Expenses" };
            var template = _.template($("#expense-template").html(), variables);
            $(this.el).html( template );
        },
        events: {
            "click #add-expense": "showPrompt",
        },
        showPrompt: function () {
            var merchantName = $("#merchant-name").val();
            var expenseDate = $("#expense-date").val();
            var amount = $("#expense-amount").val();
            $("#new-expense").trigger("reset");
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