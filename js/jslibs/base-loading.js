//监听加载状态改变  
document.onreadystatechange = completeLoading;  
  
//加载状态为complete时移除loading效果  
function completeLoading() {  
    if (document.readyState == "complete") {  
        var loadingMask = document.getElementById('loadingDiv');  
        loadingMask.parentNode.removeChild(loadingMask); 
    }  
}  