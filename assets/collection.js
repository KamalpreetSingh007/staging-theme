var collectionData_json               =   [];

const col_4_c1                        =   /^(0|4|8|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96|100|104|108|112|116|120|124|128|132|136|140|144|148|152|156|160|164|168|172|176|180|184|188|192|196|200|204|208|212|216|220|224|228|232|236|240|244|248|252|256|260|264|268|272|276|280|284|288|292|296|300|304|308|312|316|320|324|328|332|336|340|344|348|352|356|360|364|368|372|376|380|384|388|392|396|400|404|408|412|416|420|424|428|432|436|440|444|448|452|456|460|464|468|472|476|480|484|488|492|496)$/;
const col_4_c2                        =   /^(1|5|9|13|17|21|25|29|33|37|41|45|49|53|57|61|65|69|73|77|81|85|89|93|97|101|105|109|113|117|121|125|129|133|137|141|145|149|153|157|161|165|169|173|177|181|185|189|193|197|201|205|209|213|217|221|225|229|233|237|241|245|249|253|257|261|265|269|273|277|281|285|289|293|297|301|305|309|313|317|321|325|329|333|337|341|345|349|353|357|361|365|369|373|377|381|385|389|393|397|401|405|409|413|417|421|425|429|433|437|441|445|449|453|457|461|465|469|473|477|481|485|489|493|497)$/;
const col_4_c3                        =   /^(2|6|10|14|18|22|26|30|34|38|42|46|50|54|58|62|66|70|74|78|82|86|90|94|98|102|106|110|114|118|122|126|130|134|138|142|146|150|154|158|162|166|170|174|178|182|186|190|194|198|202|206|210|214|218|222|226|230|234|238|242|246|250|254|258|262|266|270|274|278|282|286|290|294|298|302|306|310|314|318|322|326|330|334|338|342|346|350|354|358|362|366|370|374|378|382|386|390|394|398|402|406|410|414|418|422|426|430|434|438|442|446|450|454|458|462|466|470|474|478|482|486|490|494|498)$/;
const col_4_c4                        =   /^(3|7|11|15|19|23|27|31|35|39|43|47|51|55|59|63|67|71|75|79|83|87|91|95|99|103|107|111|115|119|123|127|131|135|139|143|147|151|155|159|163|167|171|175|179|183|187|191|195|199|203|207|211|215|219|223|227|231|235|239|243|247|251|255|259|263|267|271|275|279|283|287|291|295|299|303|307|311|315|319|323|327|331|335|339|343|347|351|355|359|363|367|371|375|379|383|387|391|395|399|403|407|411|415|419|423|427|431|435|439|443|447|451|455|459|463|467|471|475|479|483|487|491|495|499)$/;

const col_3_c1                        =   /^(0|3|6|9|12|15|18|21|24|27|30|33|36|39|42|45|48|51|54|57|60|63|66|69|72|75|78|81|84|87|90|93|96|99|102|105|108|111|114|117|120|123|126|129|132|135|138|141|144|147|150|153|156|159|162|165|168|171|174|177|180|183|186|189|192|195|198|201|204|207|210|213|216|219|222|225|228|231|234|237|240|243|246|249|252|255|258|261|264|267|270|273|276|279|282|285|288|291|294|297|300|303|306|309|312|315|318|321|324|327|330|333|336|339|342|345|348|351|354|357|360|363|366|369|372|375|378|381|384|387|390|393|396|399|402|405|408|411|414|417|420|423|426|429|432|435|438|441|444|447|450|453|456|459|462|465|468|471|474|477|480|483|486|489|492|495|498)$/;
const col_3_c2                        =   /^(1|4|7|10|13|16|19|22|25|28|31|34|37|40|43|46|49|52|55|58|61|64|67|70|73|76|79|82|85|88|91|94|97|100|103|106|109|112|115|118|121|124|127|130|133|136|139|142|145|148|151|154|157|160|163|166|169|172|175|178|181|184|187|190|193|196|199|202|205|208|211|214|217|220|223|226|229|232|235|238|241|244|247|250|253|256|259|262|265|268|271|274|277|280|283|286|289|292|295|298|301|304|307|310|313|316|319|322|325|328|331|334|337|340|343|346|349|352|355|358|361|364|367|370|373|376|379|382|385|388|391|394|397|400|403|406|409|412|415|418|421|424|427|430|433|436|439|442|445|448|451|454|457|460|463|466|469|472|475|478|481|484|487|490|493|496|499)$/;
const col_3_c3                        =   /^(2|5|8|11|14|17|20|23|26|29|32|35|38|41|44|47|50|53|56|59|62|65|68|71|74|77|80|83|86|89|92|95|98|101|104|107|110|113|116|119|122|125|128|131|134|137|140|143|146|149|152|155|158|161|164|167|170|173|176|179|182|185|188|191|194|197|200|203|206|209|212|215|218|221|224|227|230|233|236|239|242|245|248|251|254|257|260|263|266|269|272|275|278|281|284|287|290|293|296|299|302|305|308|311|314|317|320|323|326|329|332|335|338|341|344|347|350|353|356|359|362|365|368|371|374|377|380|383|386|389|392|395|398|401|404|407|410|413|416|419|422|425|428|431|434|437|440|443|446|449|452|455|458|461|464|467|470|473|476|479|482|485|488|491|494|497)$/;

const col_2_c1                        =   /^(0|2|4|6|8|10|12|14|16|18|20|22|24|26|28|30|32|34|36|38|40|42|44|46|48|50|52|54|56|58|60|62|64|66|68|70|72|74|76|78|80|82|84|86|88|90|92|94|96|98|100|102|104|106|108|110|112|114|116|118|120|122|124|126|128|130|132|134|136|138|140|142|144|146|148|150|152|154|156|158|160|162|164|166|168|170|172|174|176|178|180|182|184|186|188|190|192|194|196|198|200|202|204|206|208|210|212|214|216|218|220|222|224|226|228|230|232|234|236|238|240|242|244|246|248|250|252|254|256|258|260|262|264|266|268|270|272|274|276|278|280|282|284|286|288|290|292|294|296|298|300|302|304|306|308|310|312|314|316|318|320|322|324|326|328|330|332|334|336|338|340|342|344|346|348|350|352|354|356|358|360|362|364|366|368|370|372|374|376|378|380|382|384|386|388|390|392|394|396|398|400|402|404|406|408|410|412|414|416|418|420|422|424|426|428|430|432|434|436|438|440|442|444|446|448|450|452|454|456|458|460|462|464|466|468|470|472|474|476|478|480|482|484|486|488|490|492|494|496|498)$/;
const col_2_c2                        =   /^(1|3|5|7|9|11|13|15|17|19|21|23|25|27|29|31|33|35|37|39|41|43|45|47|49|51|53|55|57|59|61|63|65|67|69|71|73|75|77|79|81|83|85|87|89|91|93|95|97|99|101|103|105|107|109|111|113|115|117|119|121|123|125|127|129|131|133|135|137|139|141|143|145|147|149|151|153|155|157|159|161|163|165|167|169|171|173|175|177|179|181|183|185|187|189|191|193|195|197|199|201|203|205|207|209|211|213|215|217|219|221|223|225|227|229|231|233|235|237|239|241|243|245|247|249|251|253|255|257|259|261|263|265|267|269|271|273|275|277|279|281|283|285|287|289|291|293|295|297|299|301|303|305|307|309|311|313|315|317|319|321|323|325|327|329|331|333|335|337|339|341|343|345|347|349|351|353|355|357|359|361|363|365|367|369|371|373|375|377|379|381|383|385|387|389|391|393|395|397|399|401|403|405|407|409|411|413|415|417|419|421|423|425|427|429|431|433|435|437|439|441|443|445|447|449|451|453|455|457|459|461|463|465|467|469|471|473|475|477|479|481|483|485|487|489|491|493|495|497|499)$/;

const icons                           =   {
  editPrice__             :   `<svg class="priceEditableSVG" width="24px" height="24px" viewBox="0 0 64 64"><g><path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/><polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/><polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/><path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/></g></svg>`,
  editPrice               :   `<svg class="priceEditableSVG" viewBox="0 0 100 100"><g><path d="M21.2,80.4c-0.4,0-0.9-0.2-1.2-0.5c-0.4-0.4-0.6-1.1-0.4-1.7l4.9-14.6c0.2-0.6,0.5-1.2,1-1.6l41.2-41.2 c1.6-1.6,4.2-1.6,5.8,0l6.6,6.6c1.6,1.6,1.6,4.2,0,5.8L38,74.5c-0.4,0.4-1,0.8-1.6,1l-14.6,4.9C21.6,80.4,21.4,80.4,21.2,80.4z M69.7,21.6c-0.5,0-1.1,0.2-1.5,0.6L27,63.5c-0.2,0.2-0.4,0.5-0.5,0.8l-4.7,13.9l13.9-4.7c0.3-0.1,0.6-0.3,0.8-0.5l41.2-41.2 c0.8-0.8,0.8-2.2,0-3l-6.6-6.6C70.8,21.8,70.2,21.6,69.7,21.6z"/></g><g><path d="M69.2,42.8c-0.3,0-0.5-0.1-0.7-0.3l-11-11c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l11,11c0.4,0.4,0.4,1,0,1.4 C69.7,42.7,69.4,42.8,69.2,42.8z"/></g><g><path d="M73.2,38.8c-0.3,0-0.5-0.1-0.7-0.3l-11-11c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l11,11c0.4,0.4,0.4,1,0,1.4 C73.7,38.7,73.4,38.8,73.2,38.8z"/></g><g><path d="M37.2,74.8c-0.3,0-0.5-0.1-0.7-0.3l-11-11c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l11,11c0.4,0.4,0.4,1,0,1.4 C37.7,74.7,37.4,74.8,37.2,74.8z"/></g></svg>`
};

let primaryClassForProducts           =   `.collectionProductsView`;
const productsGridWrap                =   `.gridView`;
const itemCard__                      =   '.card__';

const __msg__NoCardAvailable          =   '';

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };


$( document )
.ready(function () {
  try {

    console.clear();

    addParamsForCurrency();

    const checkQRParam                =   getParamSimple( `qr` );

    if ( typeof checkQRParam !== 'undefined' && checkQRParam && checkQRParam == 'true' ) {

      const qrURL                     =   $( `.collectionProductsView` ).attr( `uri` );

      $( `.collectionProductsView` )
        .addClass( `collectionProductsView__qr` )
        .removeClass( `collectionProductsView` )
        .attr( `uri`, `${ qrURL }QR` )
        .find( `.gridView` )
        .text( `` );

      $( `#shopify-section-signUpFeature` ).hide();

      primaryClassForProducts         =   `.collectionProductsView__qr`;

      $( `.collectionProductsView__qr` )
        .after( `<div class="collectionProductsView__qr__Print">${ __msg__NoCardAvailable }</div>` );

      $( `.loadMoreElement` )
        .addClass( `loadMoreElement__qr` )
        .text( `Load More` )
        .removeClass( `loadMoreElement` );

      $( `.wizardSec` ).removeClass( `_hide_` );

    } else {

      getData();

    }

    $( '.mobileSignUpFeature [loading="show"]' ).attr( 'loading', '' );

  }
  catch ( err ) {
    console.log ( 'Error Ready', err.message );
  }
})

.on('click', '.statementsActionBtn .btnAction', function( e ) {
  try {

    e.stopImmediatePropagation();
    const getState                    =   $( '.bio_artistStatement' ).attr( 'state' );

    if ( getState == 'closed' ) {

      $( '.bio_artistStatement' ).attr( 'state', 'open' );
      $( this ).text( 'Close' );

    } else if ( getState == 'open' ) {

      $( '.bio_artistStatement' ).attr( 'state', 'closed' );
      $( this ).text( 'Read More' );

    }

  }
  catch ( err ) {
    console.log ( 'Error .statementsActionBtn .btnAction', err.message );
  }
})

.on('click', '.loadMoreElement__qr', async function( e ) {
  try {

    e.stopImmediatePropagation();
    const getStatus                   =   $( primaryClassForProducts ).attr( `status` );
    const isAvailableNextPage         =   $( primaryClassForProducts ).attr( `is-available-next-page` );

    if ( isAvailableNextPage == 'true' && getStatus != 'processing' ) {

      $( primaryClassForProducts ).attr( 'status', 'processing' );
      await getData( `QR` );

    }

  }
  catch ( err ) {
    console.log ( 'Error .loadMoreElement__qr', err.message );
  }
});

$( window ).on('scroll', async function() {
  try {

    if ( primaryClassForProducts == `.collectionProductsView__qr` ) {

    } else {

      const isVisible                 =   isInViewport( '.loadMoreElement' );

      if ( isVisible ) {

        const getStatus               =   $( primaryClassForProducts ).attr( 'status' );
        const isAvailableNextPage     =   $( primaryClassForProducts ).attr( 'is-available-next-page' );

        if ( isAvailableNextPage == 'true' && getStatus != 'processing' ) {

          $( primaryClassForProducts ).attr( 'status', 'processing' );
          await getData();

        }

      }

    }

  }
  catch ( err ) {
    console.log ( 'Error Scroll', err.message );
  }
});



async function addParamsForCurrency() {
  try {

    let returnTo                      =   location.href;

    returnTo                          =   returnTo.replace( 'https://loca.art', '' );

    returnTo                          =   await removeParam( 'currency', returnTo );

    $( `#localization_form input[name="return_to"]` ).val( returnTo );

  }
  catch ( err ) {
    console.log( `ERROR addParamsForCurrency`, err.message );
  }
}

function isInViewport( this_ ) {
  try {

    const elementTop                  =   $( this_ ).offset().top;
    const elementBottom               =   elementTop + $( this_ ).outerHeight();

    const viewportTop                 =   $(window).scrollTop();
    const viewportBottom              =   viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;

  }
  catch ( err ) {
    console.log ( 'Error isInViewport', err.message );
  }
}

async function getParam ( paramIs ) {
  try {

    const url                         =   location.href;
    const objURL                      =   new URL(url);
    const c                           =   objURL.searchParams.get( paramIs );
    return c;

  }
  catch ( err ) {
    console.log ( 'ERROR getParam', err.message );
  }
}

function getParamSimple ( paramIs ) {
  try {

    const url                         =   location.href;
    const objURL                      =   new URL(url);
    const c                           =   objURL.searchParams.get( paramIs );
    return c;

  }
  catch ( err ) {
    console.log ( 'ERROR getParamSimple', err.message );
  }
}

async function removeParam ( key, sourceURL ) {
  try {

    let rtn                           =   sourceURL.includes( `?` ) ? sourceURL.split("?")[0] : sourceURL;
    let param,
        params_arr                    =   [];
    let queryString                   =   (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";

    if ( queryString !== '' ) {

      params_arr                      =   queryString.split("&");

      for ( let i = params_arr.length - 1; i >= 0; i -= 1 ) {

        param                         =   params_arr[i].split("=")[0];

        if ( param === key ) {

          params_arr.splice(i, 1);

        }

      }

      if (params_arr.length) rtn      =   rtn + "?" + params_arr.join("&");
    }

    return rtn;

  }
  catch ( err ) {
    console.log( `ERROR removeParam`, err.message );
  }
}

async function getData( isQR = '' ) {
  try {

    const apiUrl                      =   $( primaryClassForProducts ).attr( 'uri' );
    let page                          =   $( primaryClassForProducts ).attr( 'page' );

    if ( typeof page !== 'undefined' && page ) {

      page                            =   page * 1;
      page                            =   page + 1;

    } else {

      page                            =   1;

    }

    if ( typeof apiUrl !== 'undefined' && apiUrl ) {

      const getResponse               =   await getRequest( `${ apiUrl }&page=${ page }` );

      if ( typeof getResponse !== 'undefined' && getResponse && isQR == '' ) {

        await setDataObject( getResponse );

        await addDataToPage( getResponse, page );

        $( `${ productsGridWrap } ${ itemCard__ }[ssr="true"]` ).remove();

        // console.log ( 'getResponse', getResponse );

        if ( getResponse.allProducts.length == 0 && getResponse.isAvailableNextPage ) {

          setTimeout(()=> {

            getData( isQR );

          },500);

          // console.log ( 'getResponse', getResponse );

        }

      } else if ( typeof getResponse !== 'undefined' && getResponse && isQR == 'QR' ) {

        await setDataObject( getResponse );

        await addDataToPage( getResponse, page, isQR );

        $( `${ productsGridWrap } ${ itemCard__ }[ssr="true"]` ).remove();

      }

      await delay( 1000 );

      $( primaryClassForProducts )
      .attr({
        'page'                    :   page,
        'status'                  :   '',
        'is-available-next-page'  :   getResponse.isAvailableNextPage
      });

      if ( getResponse.isAvailableNextPage == false ) {

        // $( `.loadMoreElement` ).text( 'There are no more results' );

      }

    }

  }
  catch ( err ) {
    console.log ( 'Error getData', err.message );
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function dataIteration( dataArray, i, wrapper, pageWidth, type = '', shouldAddOrNot = '', isQR = '' ) {
  try {

    const r                           =   dataArray[i];

    const iStr                        =   i.toString();

    const isDuplicate                 =   $( `${ primaryClassForProducts } ${ productsGridWrap } ${ itemCard__ }[handle="${ r.handle }"]` ).length;

    if ( isDuplicate == 0 ) {

      const getHTML                   =   await cardHTML( r, type, shouldAddOrNot, isQR );

      if ( isQR == 'QR' ) {

        wrapper.append( getHTML );

      } else {

        if ( pageWidth > 768 ) {

          if ( iStr.match( col_4_c1 ) ) {

            wrapper.find( '.c1' ).append( getHTML );

          } else if ( iStr.match( col_4_c2 ) ) {

            wrapper.find( '.c2' ).append( getHTML );

          } else if ( iStr.match( col_4_c3 ) ) {

            wrapper.find( '.c3' ).append( getHTML );

          } else if ( iStr.match( col_4_c4 ) ) {

            wrapper.find( '.c4' ).append( getHTML );

          }

        } else if ( pageWidth > 575 && pageWidth < 768 ) {

          if ( iStr.match( col_3_c1 ) ) {

            wrapper.find( '.c1' ).append( getHTML );

          } else if ( iStr.match( col_3_c2 ) ) {

            wrapper.find( '.c2' ).append( getHTML );

          } else if ( iStr.match( col_3_c3 ) ) {

            wrapper.find( '.c3' ).append( getHTML );

          }

        } else if ( pageWidth > 425 && pageWidth < 575 ) {

          if ( iStr.match( col_2_c1 ) ) {

            wrapper.find( '.c1' ).append( getHTML );

          } else if ( iStr.match( col_2_c2 ) ) {

            wrapper.find( '.c2' ).append( getHTML );

          }

        } else {

          wrapper.find( '.c1' ).append( getHTML );

        }

      }

    }

  }
  catch ( err ) {
    console.log ( 'ERROR dataIteration', err.message );
  }
}

async function addDataToPage( o, page, isQR ) {
  try {

    const getLength                   =   o.allProducts.length;

    const pageWidth                   =   $( window ).width();

    const wrapper                     =   $( `${ primaryClassForProducts } ${ productsGridWrap }` );

    if ( getLength > 0 ) {

      const checkQRParam              =   getParamSimple( `qr` );

      let allProductObject            =   o.allProducts;

      if ( typeof checkQRParam !== 'undefined' && checkQRParam && checkQRParam == 'true' ) {

        allProductObject              =   await getQRCode_as_singleReqAnd_add_to_Object( o.allProducts );

      }

      for ( let i = 0; i < getLength; i++ ) {

        await dataIteration( allProductObject, i, wrapper, pageWidth, '', '', isQR );

      }

      checkImagesLoaded();

      const checkPrintProcessed       =   $( `.collectionProductsView__qr__Print.printProcessed` ).length;

      if ( checkPrintProcessed > 0 ) {

        $( `.printSettings .printSizeApply` ).click();

      }

    }

  }
  catch ( err ) {
    console.log ( 'Error addDataToPage', err.message );
  }
}

async function getQRCode_as_singleReqAnd_add_to_Object( o ) {
  try {

    const getProducts                 =   [];

    for ( const itemObj of o ) {

      getProducts.push({
        id              :   itemObj.product_id,
        name            :   itemObj.handle
      });

      // console.log( itemObj );

    }

    const postFormObj                 =   {
      currency          :     qrFormObject.currency,
      graphics          :     qrFormObject.graphics,
      originals_price   :     qrFormObject.originals_price,
      prints_price      :     qrFormObject.prints_price,
      utm_campaign      :     qrFormObject.utm_campaign,
      utm_medium        :     qrFormObject.utm_medium,
      utm_source        :     qrFormObject.utm_source,
      products          :     getProducts
    };

    // console.log ( 'postFormObj', postFormObj );

    const makeNewObject                 =   [];

    if ( typeof postRequest === 'function' ) {

      const getQR                       =   await postRequest( 'https://rtwlk.com/api/v1/qr_codes', postFormObj, 'directReturn' );

      console.log ( 'getQR', getQR );

      let i                             =   0;

      for ( const itemObj of o ) {

        const item                      =   itemObj;

        item['qrCode']                  =   getQR[i].qr_code;

        makeNewObject.push( item );

        i++;

      }

    }

    return makeNewObject;

  }
  catch ( err ) {
    console.log( `ERROR getQRCode_as_singleReqAnd_add_to_Object`, err.message );
  }
}

async function setDataObject( o ) {
  try {

    const getLength                   =   o.allProducts.length;

    if ( getLength > 0 ) {

      for ( let i = 0; i < getLength; i++ ) {

        const r                       =   o.allProducts[i];

        const isDuplicate             =   $( `${ primaryClassForProducts } ${ productsGridWrap } ${ itemCard__ }[handle="${ r.handle }"]` ).length;

        if ( isDuplicate == 0 ) {

          collectionData_json.push( r );

        } else {

          console.log ( 'setDataObject__r', r );

        }

      }

    }

  }
  catch ( err ) {
    console.log ( 'Error setDataObject', err.message );
  }
}

async function cardHTML( o, type, shouldAddOrNot, isQR ) {
  try {

    let price__                       =   '';

    if ( o.price == '' && o.min_price == '' ) {

      price__                         =   lang__.products.product.sold_out;

    } else {

      price__                         =   o.price;

    }

    let exhibition__                  =   'hide';


    if ( typeof o.exhibition !== 'undefined' && o.exhibition && typeof o.exhibitionEndDate !== 'undefined' && o.exhibitionEndDate && typeof o.todayDateForExhibition !== 'undefined' && o.todayDateForExhibition && typeof o.exhibitionStartDate !== 'undefined' && o.exhibitionStartDate ) {

      const startDate             =   new Date( `${ o.exhibitionStartDate }` ).getTime();
      const lastDate              =   new Date( `${ o.exhibitionEndDate }` ).getTime();
      const todayDate             =   new Date( `${ o.todayDateForExhibition }` ).getTime();

      if ( lastDate >= todayDate && startDate <= todayDate ) {

        exhibition__                  =   'show';

      } else if ( lastDate > todayDate && startDate > todayDate ) {

        exhibition__                  =   'hide';

      } else if ( lastDate < todayDate && startDate < todayDate ) {

        exhibition__                  =   'hide';

      }

    }


    // if ( typeof o.exhibitionEndDate !== 'undefined' && o.exhibitionEndDate && typeof o.todayDateForExhibition !== 'undefined' && o.todayDateForExhibition ) {

    //   const lastDate                  =   new Date( `${ o.exhibitionEndDate }` ).getTime();
    //   const todayDate                 =   new Date( `${ o.todayDateForExhibition }` ).getTime();

    //   if ( lastDate < todayDate ) {

    //     exhibition__                  =   'hide';

    //   }

    // }

    if ( isQR == '' ) {

      const isQR__active              =   $( `.collectionProductsView__qr[qr-form-submitted]` ).length;

      if ( isQR__active > 0 ) {

        isQR                          =   `QR`;

      }

    }

    if ( typeof o.qrCode !== 'undefined' && o.qrCode ) {

      return  `
        <div class="card__ a7" handle="${ o.handle }" pid="${ o.product_id }">
          <div class="_vendor_">${ o.vendor }</div>
          <div class="_handle_">${ o.title }</div>
          ${ typeof qrFormObject.originals_price !== 'undefined' && qrFormObject.originals_price ? `${ price__ != '' && price__ != 'Sold' ? `<div class="_originalPrice_">Price: <span class="editableOriginalPrice">${ price__ }</span><span class="updateOriginalPrice">${ icons.editPrice }</span></div>` : `` }` : `` }
          ${ typeof qrFormObject.originals_price !== 'undefined' && qrFormObject.originals_price ? `${ price__ != '' && price__ == 'Sold' ? `<div class="_originalPrice_ makeItHide notModified" qrsoldprice="${ currentCurrencySymbol }">Price: <span class="priceForNonPrintable">${ price__ }</span><span class="priceEditableDiv" contenteditable="false">${ currentCurrencySymbol }</span><span class="editPriceHere">${ icons.editPrice }</span></div>` : `` }` : `` }

          ${ typeof qrFormObject.prints_price !== 'undefined' && qrFormObject.prints_price ? `${ o.min_price != '' && o.min_price != lang__.products.product.sold_out ? `<div class="_printPrice_">Prints available starting at: <span class="editPrintPrice" contenteditable="true">${ o.min_price }</span><span class="editPriceHere__forPrint">${ icons.editPrice }</span></div>` : `` }` : `` }

          <div class="_buyNowAt_">Buy now at <span class="url">${ qrFormObject.pageURL }</span></div>

          ${ typeof qrFormObject.graphics !== 'undefined' && qrFormObject.graphics && qrFormObject.graphics == 'graphics' ? `
            <div class="_graphics_">
              <div class="_icon_">
                <svg width="151px" height="105px" viewBox="0 0 151 105" enable-background="new 0 0 151 105"><g><path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M140.333,88.5c0,2.485-2.015,4.5-4.5,4.5H15.167 c-2.486,0-4.5-2.015-4.5-4.5v-72c0-2.485,2.014-4.5,4.5-4.5h120.666c2.485,0,4.5,2.015,4.5,4.5V88.5z"/><g id="Apple_Pay"><path id="_Compound_Path_" fill="#010101" d="M43.389,39.121c-1.182,1.455-2.962,2.295-4.837,2.279 c-0.107-1.836,0.512-3.641,1.725-5.021c1.225-1.411,2.947-2.294,4.807-2.465C45.231,35.806,44.622,37.679,43.389,39.121 M45.083,41.77c-2.681-0.154-4.96,1.51-6.162,1.51c-1.201,0-3.08-1.417-5.36-1.387c-2.82,0.057-5.399,1.604-6.777,4.066 c-2.865,4.961-0.739,12.324,2.063,16.359c1.356,1.971,3.082,4.189,5.146,4.098c2.063-0.093,2.834-1.325,5.299-1.325 c2.464,0,3.081,1.325,5.329,1.294c2.25-0.031,3.636-2.002,5.022-4.005c0.957-1.415,1.704-2.962,2.218-4.591 c-2.629-1.139-4.335-3.727-4.344-6.592c0.045-2.519,1.369-4.84,3.512-6.162c-1.377-1.938-3.57-3.131-5.945-3.234 M60.487,36.225 v30.037h4.805V55.91h6.439c5.232,0.293,9.711-3.71,10.006-8.941c0.017-0.306,0.019-0.611,0.006-0.916 c0.244-5.201-3.773-9.615-8.975-9.859c-0.294-0.014-0.589-0.014-0.883,0L60.487,36.225z M65.292,40.137h5.238 c3.049-0.434,5.871,1.688,6.305,4.736c0.055,0.391,0.068,0.785,0.041,1.18c0.215,3.105-2.129,5.798-5.234,6.014 c-0.381,0.025-0.764,0.014-1.143-0.037h-5.207V40.137z M90.123,66.262c2.806,0.067,5.427-1.396,6.839-3.82l0,0v3.82h4.313V51.258 c0-4.343-3.45-7.116-8.78-7.116c-5.329,0-8.503,2.835-8.719,6.716h4.19c0.495-1.98,2.374-3.295,4.405-3.08 c2.834,0,4.437,1.355,4.437,3.789v1.633l-5.823,0.37c-5.391,0.308-8.318,2.526-8.318,6.377c0.123,3.639,3.171,6.49,6.811,6.369 C89.692,66.309,89.909,66.29,90.123,66.262z M91.261,62.836c-2.464,0-3.941-1.318-3.941-3.197s1.51-3.081,4.406-3.081l5.176-0.339 v1.693c-0.056,2.791-2.361,5.008-5.15,4.953c-0.133-0.003-0.264-0.01-0.396-0.023L91.261,62.836z M107.129,74.18 c4.528,0,6.654-1.726,8.534-6.963l8.163-22.797h-4.714l-5.482,17.714l0,0l-5.484-17.714h-4.96l7.887,21.842l-0.431,1.324 c-0.327,1.875-2.014,3.203-3.913,3.082h-1.387v3.487c0.595,0.042,1.139,0.047,1.734,0.024H107.129z"/></g></g></svg>
              </div>
              <div class="_icon_">
                <svg width="169px" height="105px" viewBox="0 0 169 105" enable-background="new 0 0 169 105"><g><g><path fill="#0E0E0E" d="M81.447,56.214v13.055h-4.142V37.03H88.29c2.648-0.055,5.208,0.949,7.112,2.791 c1.926,1.732,3.009,4.213,2.971,6.804c0.055,2.604-1.03,5.104-2.971,6.842c-1.921,1.831-4.292,2.746-7.112,2.744h-6.842V56.214z M81.447,40.999v11.254h6.945c1.539,0.046,3.027-0.559,4.097-1.667c2.176-2.116,2.225-5.594,0.109-7.77 c-0.036-0.037-0.072-0.074-0.109-0.109c-1.058-1.131-2.549-1.754-4.097-1.711h-6.945V40.999z"/><path fill="#0E0E0E" d="M107.916,46.491c3.061,0,5.477,0.818,7.249,2.454c1.771,1.636,2.656,3.878,2.655,6.729v13.595h-3.961 v-3.061h-0.18c-1.715,2.521-3.996,3.781-6.842,3.781c-2.43,0-4.463-0.72-6.099-2.161c-1.59-1.339-2.492-3.323-2.454-5.402 c0-2.283,0.862-4.097,2.587-5.445c1.726-1.348,4.029-2.023,6.909-2.027c2.459,0,4.484,0.45,6.076,1.351v-0.947 c0.009-1.417-0.619-2.763-1.71-3.666c-1.095-0.988-2.523-1.527-3.998-1.51c-2.313,0-4.144,0.976-5.492,2.927l-3.647-2.296 C101.014,47.931,103.984,46.491,107.916,46.491z M102.558,62.516c-0.005,1.069,0.506,2.076,1.374,2.701 c0.916,0.721,2.053,1.102,3.218,1.08c1.748-0.003,3.423-0.698,4.659-1.934c1.372-1.291,2.058-2.806,2.058-4.545 c-1.292-1.029-3.092-1.544-5.402-1.544c-1.682,0-3.085,0.406-4.208,1.217C103.121,60.314,102.558,61.314,102.558,62.516 L102.558,62.516z"/><path fill="#0E0E0E" d="M140.558,47.211l-13.829,31.78h-4.274l5.131-11.12l-9.093-20.66h4.501l6.572,15.845h0.09l6.392-15.845 H140.558z"/><path fill="#848484" d="M64.712,53.399c0.001-1.262-0.105-2.521-0.319-3.766H46.927v7.133h10.003 c-0.414,2.302-1.75,4.335-3.699,5.628v4.63h5.97C62.698,63.802,64.712,59.036,64.712,53.399z"/><path fill="#939393" d="M46.927,71.499c4.998,0,9.206-1.641,12.275-4.471l-5.97-4.63c-1.662,1.126-3.802,1.77-6.305,1.77 c-4.831,0-8.931-3.257-10.397-7.645h-6.15v4.771C33.523,67.55,39.926,71.498,46.927,71.499z"/><path fill="#C8C7C7" d="M36.53,56.522c-0.775-2.299-0.775-4.79,0-7.089v-4.772h-6.15c-2.629,5.232-2.629,11.4,0,16.632 L36.53,56.522z"/><path fill="#838383" d="M46.927,41.789c2.642-0.043,5.193,0.955,7.105,2.778l0,0l5.286-5.286 c-3.353-3.148-7.793-4.877-12.391-4.823c-7.001,0-13.404,3.949-16.547,10.204l6.15,4.772 C37.996,45.045,42.097,41.789,46.927,41.789z"/></g><path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M163.291,52.5c0,22.367-18.132,40.5-40.5,40.5 H46.209c-22.368,0-40.5-18.133-40.5-40.5l0,0c0-22.367,18.132-40.5,40.5-40.5h76.582C145.159,12,163.291,30.133,163.291,52.5 L163.291,52.5z"/></g></svg>
              </div>
              <div class="_icon_">
                <svg width="151px" height="105px" viewBox="0 0 151 105" enable-background="new 0 0 151 105"><g><path fill="#1F1F1F" d="M143.375,90.263c0,2.484-2.015,4.5-4.5,4.5H12.125c-2.485,0-4.5-2.016-4.5-4.5V14.737 c0-2.485,2.015-4.5,4.5-4.5h126.75c2.485,0,4.5,2.015,4.5,4.5V90.263z"/><g><polygon fill="#FFFFFF" points="63.335,34.599 55.459,70.877 65.006,70.877 72.641,34.599"/><path fill="#FFFFFF" d="M49.493,34.599l-9.787,24.583l-4.058-21.004c-0.475-2.386-2.387-3.579-4.295-3.579H15.362l-0.237,0.956 c3.342,0.717,6.922,1.91,9.309,3.104c1.431,0.713,1.669,1.432,2.148,3.1L33.98,70.64h10.021l15.275-36.278h-9.784V34.599z"/><path fill="#FFFFFF" d="M123.715,34.599H115.6c-1.908,0-3.34,0.956-4.055,2.629L97.463,70.877h9.784l1.911-5.49h11.933l1.193,5.49 h8.591L123.715,34.599z M112.26,57.988l5.011-13.602l2.864,13.602H112.26z"/><path fill="#FFFFFF" d="M85.052,44.625c0-1.193,1.193-2.625,4.058-3.104c1.432-0.237,5.011-0.237,9.309,1.673l1.669-7.639 c-2.146-0.714-5.249-1.67-8.828-1.67c-9.31,0-15.753,5.012-15.753,11.934c0,5.248,4.772,8.115,8.115,9.784 c3.58,1.669,4.773,2.862,4.773,4.535c0,2.387-2.865,3.58-5.729,3.58c-4.773,0-7.397-1.193-9.546-2.387l-1.672,7.873 c2.149,0.956,6.207,1.911,10.502,1.911c9.784,0,16.229-4.773,16.229-12.408C98.178,49.636,84.814,48.918,85.052,44.625z"/></g></g></svg>
              </div>
              <div class="_icon_">
                <svg width="151px" height="105px" viewBox="0 0 151 105" enable-background="new 0 0 151 105"><g><polygon fill="#010101" points="127.662,63.066 127.662,64.513 127.914,64.513 127.914,63.066 128.512,63.066 128.512,62.814 127.066,62.814 127.066,63.066"/><g><path fill="#010101" d="M123.577,86.332c-2.104-2.796-7.671-1.309-7.671,3.565c0,4.978,5.771,6.312,7.671,3.567v1.18h2.026V81.381 h-2.026V86.332z M120.857,92.899c-1.744,0-2.873-1.334-2.873-3.002c0-1.667,1.129-3.001,2.873-3.001 c1.693,0,2.874,1.334,2.874,3.001C123.731,91.643,122.551,92.899,120.857,92.899z"/><path fill="#010101" d="M46.716,86.332c-0.692-0.847-1.667-1.386-3.001-1.386c-2.643,0-4.67,2.104-4.67,4.951 c0,2.874,2.027,4.952,4.67,4.952c1.334,0,2.309-0.487,3.001-1.386v1.181h2.027v-9.442h-2.027V86.332z M43.997,92.899 c-1.821,0-2.873-1.334-2.873-3.002c0-1.667,1.052-3.001,2.873-3.001c1.667,0,2.771,1.334,2.795,3.001 C46.792,91.643,45.664,92.899,43.997,92.899z"/><path fill="#010101" d="M74.218,84.921c-2.718,0-4.669,2.027-4.669,4.952c0,5.259,5.797,6.131,8.671,3.643l-0.975-1.539 c-2.001,1.642-5.028,1.488-5.618-1.258h7.055C78.682,86.563,76.783,84.921,74.218,84.921z M71.704,89.052 c0.204-1.334,1.05-2.231,2.437-2.231c1.333,0,2.232,0.77,2.463,2.231H71.704z"/><path fill="#010101" d="M104.516,86.332c-2.13-2.821-7.672-1.231-7.672,3.565c0,4.926,5.748,6.338,7.672,3.567v1.18h2.104v-9.441 h-2.104V86.332z M101.797,92.899c-1.745,0-2.797-1.334-2.797-3.002c0-1.667,1.052-3.001,2.797-3.001 c1.743,0,2.872,1.334,2.872,3.001C104.67,91.643,103.54,92.899,101.797,92.899z"/><path fill="#010101" d="M33.453,84.947c-1.181,0-2.437,0.359-3.284,1.667c-0.616-1.052-1.667-1.667-3.131-1.667 c-0.975,0-1.949,0.359-2.718,1.386v-1.13h-2.104v9.416h2.104c0-4.849-0.642-7.747,2.309-7.747c2.616,0,2.104,2.616,2.104,7.747 h2.026c0-4.694-0.642-7.747,2.31-7.747c2.617,0,2.104,2.564,2.104,7.747h2.102v-5.901h-0.05 C37.225,86.485,35.762,85.023,33.453,84.947z"/><path fill="#010101" d="M53.258,87.871c0-1.462,3.054-1.231,4.745-0.281l0.848-1.668c-2.411-1.565-7.748-1.539-7.748,2.104 c0,3.668,5.876,2.129,5.876,3.849c0,1.616-3.465,1.487-5.312,0.205l-0.897,1.616c2.873,1.949,8.362,1.54,8.362-1.925 C59.132,87.923,53.258,89.667,53.258,87.871z"/><path fill="#010101" d="M64.521,91.359v-4.258h3.36v-1.898h-3.36V82.33h-2.104v2.873h-1.95v1.872h1.95v4.284 c0,4.517,4.438,3.695,5.798,2.798l-0.564-1.745C66.676,92.95,64.521,93.541,64.521,91.359z"/><path fill="#010101" d="M82.89,86.332v-1.13h-2.104v9.416h2.104v-5.31c0-2.977,2.437-2.592,3.284-2.155l0.614-1.95 C85.609,84.69,83.813,84.741,82.89,86.332z"/><path fill="#010101" d="M94.818,87.743l0.974-1.668c-2.975-2.334-8.388-1.051-8.388,3.85c0,5.078,5.747,6.104,8.388,3.847 l-0.974-1.667c-2.36,1.667-5.311,0.667-5.311-2.206C89.508,86.974,92.483,86.023,94.818,87.743z"/><path fill="#010101" d="M111.365,86.332v-1.13h-2.026v9.416h2.026v-5.31c0-2.823,2.309-2.643,3.283-2.155l0.616-1.95 C114.648,84.896,112.443,84.459,111.365,86.332z"/><path fill="#010101" d="M129.17,93.464c-0.077-0.076-0.129-0.205-0.206-0.282s-0.206-0.128-0.281-0.205 c-0.129,0-0.283-0.078-0.412-0.078c-0.075,0-0.204,0.078-0.358,0.078c-0.129,0.077-0.206,0.128-0.282,0.205 c-0.128,0.077-0.205,0.206-0.205,0.282c-0.077,0.128-0.077,0.282-0.077,0.411c0,0.076,0,0.205,0.077,0.358 c0,0.077,0.077,0.206,0.205,0.282c0.076,0.077,0.128,0.129,0.282,0.205c0.129,0.077,0.283,0.077,0.358,0.077 c0.129,0,0.283,0,0.412-0.077c0.075-0.076,0.204-0.128,0.281-0.205s0.128-0.205,0.206-0.282c0.077-0.154,0.077-0.282,0.077-0.358 C129.247,93.746,129.247,93.593,129.17,93.464z"/></g><polygon fill="#010101" points="130.744,62.783 130.305,62.783 129.8,63.885 129.297,62.783 128.858,62.783 128.858,64.48 129.108,64.48 129.108,63.191 129.612,64.293 129.958,64.293 130.397,63.191 130.397,64.48 130.744,64.48"/><g><circle fill="#898989" cx="96.843" cy="43.668" r="33.575"/><circle fill="#777677" cx="53.83" cy="43.668" r="33.574"/><path fill="#808080" d="M63.269,43.668c0,10.359,4.694,19.619,12.068,25.778c7.373-6.159,12.067-15.419,12.067-25.778 c0-10.358-4.694-19.619-12.067-25.777C67.963,24.049,63.269,33.31,63.269,43.668z"/></g></g></svg>
              </div>
            </div>
          ` : `` }

          ${ typeof qrFormObject.graphics !== 'undefined' && qrFormObject.graphics && qrFormObject.graphics == 'text' ? `
            <div class="_graphics_Text_">
              Apply Pay, Google Pay<br>
              and major credit cards accepted
            </div>
          ` : `` }

          <div class="_qrCode_">
            <div class="_text_">Scan this QR code:</div>
            <div class="qrCodeImg_wrapper">
              <img src="${ typeof o.qrCode !== 'undefined' && o.qrCode && o.qrCode !== 'error' ? o.qrCode : '' }" class="qrCodeImg">
            </div>
          </div>

          <img src="https://cdn.shopify.com/s/files/1/0454/5514/7176/files/Desktop_Logo_200x.png" class="logoImg">
        </div>
      `;

    } else {

      return  `
        <div class="card__" handle="${ o.handle }">
          <a href="${ o.url }" class="card__link">
            <div class="card__imgWrap" loading="show">
              <img src="${ o.img }" alt="${ o.title }" class="card__img" loading="lazy">
            </div>
            <div class="card__content">
              <div class="card__vendor" loading="show">${ o.vendor }</div>
              <h3 class="card__title" loading="show">${ o.title }</h3>
              ${ o.exhibition != '' && exhibition__ != 'hide' ? `
                <div class="card__exhibition" loading="show">${ o.exhibition }</div>
              ` : `` }
              ${ price__ != '' ? `<div class="card__price" loading="show">
                <span price>${ price__ }</span>
                <span taxes>${ o.tax_content }</span>
              </div>` : `` }
              ${ o.min_price != '' && o.min_price != lang__.products.product.sold_out ? `
                <div class="card__startFrom" loading="show">
                  Prints available<br>
                  starting at: ${ o.min_price }
                </div>
              ` : '' }
            </div>
          </a>
        </div>
      `;

    }

  }
  catch ( err ) {
    console.log ( 'Error cardHTML', err.message );
  }
}

async function getRequest( url ) {
  try {

    await fetch( url )
    .then(response => response.json())
    .then(data => {
      collectionData                  =   data;
    });

    return collectionData;

  }
  catch ( err ) {
    console.log ( 'Error getRequest', err.message );
  }
}

let rtime,
    timeout                           =   false,
    delta                             =   200;

$( window ).resize(function() {
  try {

    rtime                             =   new Date();

    if (timeout === false) {

      timeout                         =   true;
      setTimeout( resizeend, delta );

    }

  }
  catch ( err ) {
    console.log ( 'Error Resize', err.message );
  }
});

function resizeend() {
  try {

    if ( new Date() - rtime < delta ) {

      setTimeout( resizeend, delta );

    } else {

      timeout                         =   false;

      afterResizingAdjustCards();

    }

  }
  catch ( err ) {
    console.log ( 'Error resizeend', err.message );
  }
}

async function afterResizingAdjustCards() {
  try {

    const getLength                   =   collectionData_json.length;

    const pageWidth                   =   $( window ).width();

    const wrapper                     =   $( `${ primaryClassForProducts } ${ productsGridWrap }` );

    wrapper.find( '.c1, .c2, .c3, .c4' ).empty();

    if ( getLength > 0 ) {

      for ( let i = 0; i < getLength; i++ ) {

        await dataIteration( collectionData_json, i, wrapper, pageWidth, '', '' );

      }

      checkImagesLoaded();

    }

  }
  catch ( err ) {
    console.log ( 'Error afterResizingAdjustCards', err.message );
  }
}

function checkImagesLoaded() {
  try {

    $( `${ itemCard__ } img` ).one('load', function() {
      $( this )
        .closest( `${ itemCard__ }` )
        .find( '[loading="show"]' )
        .attr( 'loading', '' );
    }).each(function() {

      if ( this.complete ) {

        $( this ).trigger( 'load' );

      }

    });

    $( `${ itemCard__ }` ).each(function( i ) {
      const i__                       =   i + 1;

      $( this ).attr( 'i', i__ );

    });

    $( `.wizardSec .formObject .allDone` ).removeClass( `processing` );

  }
  catch ( err ) {
    console.log ( 'Error checkImagesLoaded', err.message );
  }
}

