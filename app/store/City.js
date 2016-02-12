Ext.define('MyApp.store.City', {
    extend: 'Ext.data.Store',

    alias: 'store.city',

    fields: [
        'country', 'district', 'cityname'
    ],

    data: { items: [
        { country: 'Ukraine', district: "Kharkovskaya", cityname: "Kharkiv" },
        { country: 'Ukraine', district: "Kievskaya", cityname: "Kiev" },
        { country: 'Ukraine', district: "Dnepropetrovskaya", cityname: "Dnepropetrovsk" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
