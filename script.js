var el = document.getElementById('person-list');
if(el) {
    var sortable = new Sortable(el, {
        animation: 200,
        sort: true,
        onEnd: function(evt) {
            // console.log(evt.item);
            console.log(evt.oldIndex);
            console.log(evt.newIndex);
            
            if(evt.oldIndex > evt.newIndex) {
                console.log('tumaas ang item');
            } else {
                console.log('bumaba ang item');
            }
            // console.log(evt);
            // let nextSibling = evt.item.nextElementSibling;

            // while(nextSibling) {
            //     console.log(nextSibling);
            //     nextSibling = nextSibling.nextElementSibling;
            // }
        }
    });
}
