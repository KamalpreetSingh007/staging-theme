let rtime;
let timeout   =   false;
let delta     =   200;
$( window ).resize(function() {
  try {
    rtime     =   new Date();
    if ( timeout === false ) {
      timeout =   true;
      setTimeout( resizeEnd, delta );
    }
  }
  catch ( err ) {
    console.log ( 'Error Resize', err.message );
  }
});

function resizeEnd() {
  try {
    if ( new Date() - rtime < delta ) {
      setTimeout( resizeEnd, delta );
    } else {
      timeout = false;

      if ( typeof afterResizing === 'function' ) {
        afterResizing();
      } else {
        console.log ( 'NOT FOUND afterResizing() FUNCTION' );
      }
    }
  }
  catch ( err ) {
    console.log ( 'Error resizeEnd', err.message );
  }
}
