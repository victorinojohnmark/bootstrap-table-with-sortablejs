var el = document.getElementById('person-list');
if(el) {
    var sortable = new Sortable(el, {
        animation: 200,
        sort: true,
        onEnd: function(evt) {
            // console.log(evt.item);
            // console.log(evt.oldIndex);
            // console.log(evt.newIndex);
            
            if(evt.oldIndex > evt.newIndex) {
                console.log('tumaas ang item');
                for (let i = evt.newIndex; i < evt.oldIndex + 1; i++) {
                    evt.to.children[i].firstElementChild.innerHTML = i + 1;
                    evt.to.children[i].dataset.sort = i + 1;
                }
                
            } else {
                console.log('bumaba ang item');
                for (let i = evt.oldIndex; i < evt.newIndex + 1; i++) {
                    evt.to.children[i].firstElementChild.innerHTML = i + 1;
                    evt.to.children[i].dataset.sort = i + 1;
                }
                
            }
            
            // Array.from(el.children, list => {
            //     console.log(list, ' ', list.dataset.sort);
            // });
        }
    });
}
