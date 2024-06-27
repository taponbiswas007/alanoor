$(document).ready(function(){
  $("#theme-toggle").click(function(){
      if ($("#themeMode").hasClass("light-theme")) {
          $("#themeMode").removeClass("light-theme").addClass("dark-theme");
      } else {
          $("#themeMode").removeClass("dark-theme").addClass("light-theme");
      }
  });
});
