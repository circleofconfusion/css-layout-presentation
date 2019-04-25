document.addEventListener('keyup', function(evt) {
    if (evt.keyCode == 32 || evt.keyCode == 39) {
        pageForward();
    }
    else if (evt.keyCode == 37) {
        evt.preventDefault();
        evt.stopImmediatePropagation();
        pageBackward();
    }
});

function pageForward() {
    var pageIndex = page();
    
    // if we have more pages, navigate to them
    if (pageIndex < (pages.length - 1)) {
        location.assign(pages[pageIndex + 1]);
    }
}

function pageBackward() {
    var pageIndex = page();

    // if there are previous pages, navigate to them
    if (pageIndex > 0) {
        location.assign(pages[pageIndex - 1]);
    }
}

function page() {
    var splitPath = location.pathname.split('/');
    var fileName = splitPath[splitPath.length - 1];
    return pages.indexOf(fileName);
}