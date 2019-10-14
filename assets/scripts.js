
      html = 0;
      css = 0;
      js = 0;
      output  =0;
      tot = 0;
      width = "100%";
      function sec_manage(){
        tot = html+css+js+output;
        if(tot == 1){
          width = "100%";
        }
        if(tot == 2)
        {
          width = "50%";
        }
        if(tot == 3){
          width = "33%";
        }
        if(tot == 4){
          width = "25%";
        }
      }
      function width_manage(){
        sec_manage();
        tot = 0;
        if(html == 1){
          $("#html_window").css("width",width);
          $("#html_window").css("display","block");
          $("#html_button").css("background-color","#E8F2FF");
        }
        else{
          $("#html_window").css("display","none");
          $("#html_button").css("background-color","#EDEDED");
        }

        if(css == 1){
          $("#css_window").css("width",width);
          $("#css_window").css("display","block");
          $("#css_button").css("background-color","#E8F2FF");
        }
        else{
          $("#css_window").css("display","none");
          $("#css_button").css("background-color","#EDEDED");
        }

        if(js == 1){
          $("#js_window").css("width",width);
          $("#js_window").css("display","block");
          $("#js_button").css("background-color","#E8F2FF");
        }
        else{
          $("#js_window").css("display","none");
          $("#js_button").css("background-color","#EDEDED");
        }

        if(output == 1){
          $("#output_window").css("width",width);
          $("#output_window").css("display","block");
          $("#output_button").css("background-color","#E8F2FF");
        }
        else{
          $("#output_window").css("display","none");
          $("#output_button").css("background-color","#EDEDED");
        }

      }

      $("button").hover(function(){
        $(this).css("background-color","grey");
      },function(){
        $(this).css("background-color","#EDEDED");
        if(html == 1){
        $("#html_button").css("background-color","#E8F2FF");
        }
        if(css == 1){
          $("#css_button").css("background-color","#E8F2FF");
        }
        if(js == 1){
          $("#js_button").css("background-color","#E8F2FF");
        }
        if(output == 1){
          $("#output_button").css("background-color","#E8F2FF");
        }

      });

      $("#html_button").click(function(){
        if(html == 0){
          html = 1;
          width_manage();
        }
        else{
          $("#html_window").css("display","none");
          html = 0;
        }
      });

      $("#css_button").click(function(){
        if(css == 0){
          css = 1;
        }
        else{
          $("#css_window").css("display","none");
          css = 0;
        }
        width_manage();
      });

      $("#js_button").click(function(){
        if(js == 0){
          js = 1;
        }
        else{
          $("#js_window").css("display","none");
          js = 0;
        }
        width_manage();
      });

      $("#output_button").click(function(){
        if(output == 0){
          output = 1;
        }
        else{
          $("#output_window").css("display","none");
          output = 0;
        }
        width_manage();
      });

      function update_output(){
          $("#output_window").contents().find("html").html("<html><head><style type='text/css'>"+$("#css_window").val()+"</style></head><body>"+$("#html_window").val()+"</body></html>");
          document.getElementById("output_window").contentWindow.eval($("#js_window").val());//gets the js from js_window and evaluates it using eval and uses it's output over
      }                                                                                      //output window's content

      $("#html_window").on("change keyup paste",function(){
         update_output();
      });
      $("#css_window").on("change keyup paste",function(){
          update_output();
      });
      $("#js_window").on("change keyup paste",function(){
          update_output();
      });