/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes : {
        'users' : 'onUsers'
    },

    mixins: ['MyApp.view.main.LoadMixin'],

    onUsers: function () {
      console.log('arguments', arguments);
      this.redirectTo('user/1234');
    },

    onItemSelected: function (sender, record) { console.log('onItemSelected sender, record', sender, record)
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onCitySelected: function (sender, record) { console.log('onCitySelected sender, record', sender, record)
        Ext.Msg.confirm('Confirm', 'Are you sure? You want to delete city?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onAdd: function () {
        //console.log('onAdd', arguments);
    }
});
