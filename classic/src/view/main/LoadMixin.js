Ext.define('MyApp.view.main.LoadMixin', {
  onClickSubmit: function(){ console.log('onClickSubmit');
    var uploadForm = this.getView().query('form')[0];
    uploadForm.submit({
      url: 'http://localhost:18411',
      method: 'POST',
      scope: this,
      waitMsg: 'Uploading your file...',
      success: function(){ console.log('success');
        debugger;
      },
      failure: function(){ console.log('failure');
        debugger;
      }
    });
  }
})
