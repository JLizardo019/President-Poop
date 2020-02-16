
setInterval(function() { // prevent images from reloading to the original
    
    //replace images that have the word trump in the alt text
    let imgs = document.querySelectorAll('img, picture img, figure img');
    console.log(imgs);
    imgs.forEach(img => {
        var test = img.alt;
        if (test.includes("trump")|| test.includes("Trump")){
            console.log("inside");
    img.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/5168JTnDm0L._AC_.jpg');}
    });

}, 50);

// replace all text with the word trump
function getTextNodes() {
    var nodes = [];
    
    var treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
        false
    );
    
    while(treeWalker.nextNode()) {
        var parentNode = treeWalker.currentNode.parentNode;
        var parentTagName = parentNode.tagName;
        if (parentTagName !== "SCRIPT" && parentTagName !== "STYLE" && parentTagName !== "TITLE") {
        nodes.push(treeWalker.currentNode);
        }
    }
    
    return nodes;
    }
    
    var textNodes = getTextNodes();
    
    textNodes.forEach(function(textNode) {
    var text = textNode.textContent;
    text = text.replace(/Trump/ig, '💩');
    textNode.textContent = text;
    });
    
  console.log("here");
