/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.CityList', {
    extend: 'Ext.grid.Panel',
    xtype: 'citylist',

    requires: [
        'MyApp.store.City'
    ],

    title: 'City',

    store: {
        type: 'city'
    },

    columns: [
        { text: 'Country',  dataIndex: 'country' },
        { text: 'District', dataIndex: 'district', flex: 1 },
        { text: 'City Name', dataIndex: 'cityname', flex: 1 }
    ],

    listeners: {
        select: 'onCitySelected'
    }
});
