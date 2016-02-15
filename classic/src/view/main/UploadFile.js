Ext.define('MyApp.view.main.UploadFile', {
    extend: 'Ext.form.Panel',


    title: 'Upload a Photo',
    width: 400,
    bodyPadding: 10,
    frame: true,
    xtype: 'myform',

    items: [{
        xtype: 'filefield',
        name: 'photo',
        fieldLabel: 'Photo',
        labelWidth: 50,
        msgTarget: 'side',
        allowBlank: false,
        anchor: '100%',
        buttonText: 'Select Photo...'
    }],

    buttons: [{
        text: 'Upload',
        handler: 'onClickSubmit'
    }]
});
