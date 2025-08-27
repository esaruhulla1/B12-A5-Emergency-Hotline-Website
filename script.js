function getById(id){
    const element = document.getElementById(id)
    return element;
}

getById('card-section').addEventListener('click', function(e){

    // hert count incrise function
    if(e.target.className.includes('heart-icon')){
        const heartBtn = e.target;
        let oldHertCount =  Number(getById('hert-count-icon-div').innerText);
        getById('hert-count-icon-div').innerText = oldHertCount+1;   
    }
})