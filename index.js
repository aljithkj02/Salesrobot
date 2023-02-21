
const getInterval = () => {
    let interval = 5 + Math.floor(Math.random(5) * 5);
    return interval;
}

const getUsersList = () => {
    let list = document.querySelectorAll('.reusable-search__result-container button');
    if( list.length == 0 ) console.log( 'Users not found!' );
    else {
        findNotConnectedUsers( list );
    }
}

const findNotConnectedUsers = ( list ) => {
    let spans = document.querySelectorAll('.reusable-search__result-container button span');
    if( spans.length == 0 ) console.log( 'Users not found!' );
    else {
        let count = 0;
        for( let index=0; index < spans.length; index++ ){
            if( spans[index].innerText === 'Connect' ){
                
                setTimeout(() => {
                    connectWithUsers(list, index);
                }, ( count*getInterval() ) );
                count++;
            }
        }
        console.log('Successfully Completed!!!');
    }
}

const connectWithUsers = ( list, index ) => {
    setTimeout(()=> {
        list[index].click();
    }, 2000);
    setTimeout(()=> {
        sendConnectionRequest();
    }, 4000);
}

const sendConnectionRequest = () => {
    let popup = document.querySelectorAll( '.artdeco-modal-overlay' );
    if( popup.length == 0 ) console.log( 'Not found!' );
    else{
        let sendBtn = document.querySelectorAll( '.artdeco-modal-overlay button' );
        let text = document.querySelectorAll( '.artdeco-modal-overlay .artdeco-button__text' );
        if( text[ text.length-1 ].innerText === 'Send' ){
            sendBtn[ sendBtn.length-1 ].click();
        }
    }
}


