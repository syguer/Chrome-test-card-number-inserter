chrome.contextMenus.create({
  title: "Insert test card number",
  contexts: ['editable'],
  onclick: _onClick()
});

function _onClick(){
  return function(info, tab){
    chrome.tabs.executeScript(
      tab.id,
      {
        code: "document.activeElement.value = '4111111111111111'"
      }
    )
  };
};
