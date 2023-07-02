/*----------------------------------------------------*/
  /* Work Filters
    ------------------------------------------------------ */
    filterSelection("featured");
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("work-grid-item");
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show-filter");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show-filter");
      }
    }
  
    // Show filtered elements
    function addClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }
  
    // Hide elements that are not selected
    function removeClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
  
    // Add active class to the current control button (highlight it)
    var tabContainer = document.getElementById("work-filter-tabs");
    var tabs = tabContainer.getElementsByClassName("filter-tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }