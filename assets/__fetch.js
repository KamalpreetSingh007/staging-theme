async function getRequest( url ) {
  try {
    let _d_;
    await fetch( url )
    .then(response => response.json())
    .then(data => {
      _d_     =   data;
    });

    return _d_;
  }
  catch ( err ) {
    console.log ( 'ERROR getRequest', err.message );
  }
}