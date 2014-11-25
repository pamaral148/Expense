(function ($) {
    Expense = Backbone.Model.extend({
        merchantName: null,
        date: null,
        amount: 0.00
    });
    
    Expenses = Backbone.Collection.extend({
        initialize: function(models, options) {
            this.bind("add", options.view.addExpenseLi);
        }
    });
    
}) (jQuery);


