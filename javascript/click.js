
						
                // });
                $(document).ready(function(){
	                $("#myBtn").click(function(){
	                    var inputValue=$("#myBtn").attr('value');
	                    
	                    if(inputValue=="Expand")
	                    {
	                        $("#main-navi").animate({height:"100%"});
	                        $("#myBtn").attr('value','Reduce');
	                        $("#myImg").attr("src", "close.png");
	                       
	                    }
	                    else if(inputValue=="Reduce")
	                    {
	                        $("#main-navi").animate({height:"86px"});
	                        $("#myBtn").attr('value','Expand');
	                        $("#myImg").attr("src", "Ei-navicon.svg.png");
	                    }

						});
				        
	                });
             


	